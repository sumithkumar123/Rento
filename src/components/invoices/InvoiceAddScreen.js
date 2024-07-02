import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Alert, Dimensions } from "react-native";
import { Image } from "react-native";
import invoicePage from "../../../assets/invoicePage.png";
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function InvoiceAddScreenfun({ navigation }) {
    const [tenantName, setTenantName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const validateInputs = () => {
        if (!tenantName || !amount || !date || !status) {
            Alert.alert('Validation Error', 'Please fill out all fields and select a status.');
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateInputs()) {
            navigation.navigate('InvoiceLayoutScreenfun', {
                tenantname: tenantName,
                amount,
                date,
                status
            });
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={height * 0.1} 
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Rento</Text>
                    <TouchableOpacity style={styles.back_style} onPress={() => navigation.navigate('InvoiceLayoutScreenfun')}>
                        <Text style={styles.back_text_style}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.img_cont}>
                    <Image source={invoicePage} style={styles.img_style} />
                </View>
                <Text style={styles.threads_head}>New Tenant Invoice</Text>
                <View style={styles.cardStyle}>
                    <View style={styles.inputStyle}>
                        <FontAwesome5 name="user-alt" size={width * 0.06} color="black" style={styles.iconStyle} />
                        <TextInput
                            placeholder="Enter Tenant"
                            style={styles.textInput}
                            onChangeText={text => setTenantName(text)}
                        />
                    </View>
                    <View style={styles.inputStyle}>
                        <FontAwesome6 name="wallet" size={width * 0.06} color="black" style={styles.iconStyle} />
                        <TextInput
                            placeholder="Enter Amount"
                            style={styles.textInput}
                            onChangeText={text => setAmount(text)}
                        />
                    </View>
                    <View style={styles.inputStyle}>
                        <FontAwesome6 name="calendar-alt" size={width * 0.06} color="black" style={styles.iconStyle} />
                        <TextInput
                            placeholder="Enter Date"
                            style={styles.textInput}
                            onChangeText={text => setDate(text)}
                        />
                    </View>
                    <View style={styles.inputStyle}>
                        <MaterialCommunityIcons name="check-circle-outline" size={width * 0.065} color="black" style={styles.iconStyle} />
                        <Text>Status:</Text>
                        <TouchableOpacity onPress={() => setStatus('Paid')} style={status === 'Paid' ? styles.paid_text : styles.selectedStatus}>
                            <Text>Paid</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStatus('Due')} style={status === 'Due' ? styles.due_text : styles.selectedStatus}>
                            <Text>Due</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.login_style} onPress={handleSubmit}>
                    <Text style={styles.login_text_style}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: width * 0.025,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: width * 0.025,
        paddingRight: width * 0.025,
    },
    header: {
        paddingTop: height * 0.02,
        paddingLeft: width * 0.025,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: height * 0.01,
        marginBottom: 0,
        flexDirection: 'row',
        height: height * 0.1,
    },
    headerText: {
        fontFamily: 'Shrikhand',
        fontSize: height * 0.07,
        marginBottom: 0,
    },
    back_style: {
        backgroundColor: "#c71585",
        padding: height * 0.01,
        marginTop: 0,
        width: width * 0.2,
        borderRadius: height * 0.02,
        alignSelf: 'flex-end',
        shadowColor: "black",
        shadowOffset: {
            width: width * 0.01,
            height: height * 0.01,
        },
        shadowOpacity: 0.45,
        shadowRadius: height * 0.015,
        elevation: 8,
    },
    back_text_style: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: height * 0.02,
        textAlign: 'center',
    },
    img_cont: {
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    img_style: {
        width: '100%',
        height: height * 0.25,
        resizeMode: 'contain',
    },
    threads_head: {
        fontFamily: 'Mulish_small',
        fontSize: height * 0.03,
        marginBottom: height * 0.03,
    },
    cardStyle: {
        backgroundColor: "#dcdcdc",
        borderRadius: width * 0.04,
        padding: width * 0.05,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: height * 0.01 },
        shadowOpacity: 0.3,
        elevation: 4,
        marginBottom: height * 0.03,
    },
    inputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: width * 0.03,
        padding: width * 0.03,
        marginBottom: height * 0.02,
    },
    iconStyle: {
        marginRight: width * 0.03,
    },
    textInput: {
        flex: 1,
        fontSize: height * 0.025,
    },
    paid_text: {
        backgroundColor: 'green',
        padding: height * 0.01,
        borderRadius: width * 0.03,
        marginLeft: width * 0.05,
        fontFamily: 'Mulish_small',
    },
    due_text: {
        backgroundColor: 'yellow',
        padding: height * 0.01,
        borderRadius: width * 0.03,
        marginLeft: width * 0.03,
        fontFamily: 'Mulish_small',
    },
    selectedStatus: {
        backgroundColor: '#d3d3d3',
        padding: height * 0.01,
        borderRadius: width * 0.03,
        marginLeft: width * 0.03,
        fontFamily: 'Mulish_small',
    },
    login_style: {
        backgroundColor: "#c71585",
        padding: height * 0.02,
        borderRadius: width * 0.03,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: height * 0.01 },
        shadowOpacity: 0.3,
        elevation: 4,
        marginVertical: height * 0.03,
    },
    login_text_style: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: height * 0.025,
    },
});
