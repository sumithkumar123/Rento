import React from "react";
import { Dimensions, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

import MessageStackScreenfun from './messages/MessageStackScreen';
import InvoiceStackScreenfun from './invoices/InvoiceStackScreen';
import SurveyStackScreenfun from './surveys/SurveyStackScreen';

const { width, height } = Dimensions.get('window');
const isLargeScreen = width >= 768; // You can adjust the threshold as needed

const Tab = createBottomTabNavigator();

export default function MainScreenfun() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Message') {
                        return <MaterialCommunityIcons name="message-processing-outline" size={30} color={color} />
                    } else if (route.name === 'Invoice') {
                        return <FontAwesome6 name="file-invoice-dollar" size={30} color={color} />
                    } else if (route.name === 'Survey') {
                        return <FontAwesome6 name="clipboard-list" size={30} color={color} />
                    }
                },
                tabBarActiveTintColor: '#c71585',
                tabBarInactiveTintColor: 'black',
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarStyle: styles.tabBarStyle
            })}
        >
            <Tab.Screen 
                name="Message" 
                component={MessageStackScreenfun} 
                options={{ 
                    headerShown: false,
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.labelStyle, focused && styles.focusedLabelStyle]}>Message</Text>
                    ) 
                }} 
            />
            <Tab.Screen 
                name="Invoice" 
                component={InvoiceStackScreenfun} 
                options={{ 
                    headerShown: false,
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.labelStyle, focused && styles.focusedLabelStyle]}>Invoice</Text>
                    ) 
                }} 
            />
            <Tab.Screen 
                name="Survey" 
                component={SurveyStackScreenfun} 
                options={{ 
                    headerShown: false,
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.labelStyle, focused && styles.focusedLabelStyle]}>Survey</Text>
                    ) 
                }} 
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontSize: isLargeScreen ? 18 : 16,
        fontWeight: 'bold',
        fontFamily: 'Mulish_small',    
    },
    tabBarStyle: {
        backgroundColor: '#d3d3d3',
        paddingBottom: isLargeScreen ? 12 : 8,
        paddingTop: isLargeScreen ? 12 : 8,
        height: isLargeScreen ? 80 : 70,
        borderRadius: 20,
    },
    labelStyle: {
        fontSize: isLargeScreen ? 18 : 16,
        fontFamily: 'Mulish_small',
    },
    focusedLabelStyle: { 
        fontSize: isLargeScreen ? 22 : 20,
        color: '#c71585',
        fontFamily: 'Mulish_small',
    },
});
