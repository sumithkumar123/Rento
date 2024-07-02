import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvoiceLayoutScreenfun from "./InvoiceLayoutScreen";
import InvoiceAddScreenfun from "./InvoiceAddScreen";

const InvoiceStack = createNativeStackNavigator();

export default function InvoiceStackScreenfun() {
    return (
        <InvoiceStack.Navigator>
            <InvoiceStack.Screen 
                name="InvoiceLayoutScreenfun" 
                component={InvoiceLayoutScreenfun} 
                options={{ headerShown: false }} 
            />
            <InvoiceStack.Screen 
                name="InvoiceAddScreenfun" 
                component={InvoiceAddScreenfun} 
                options={{ headerShown: false }} 
            />
        </InvoiceStack.Navigator>
    );
}
