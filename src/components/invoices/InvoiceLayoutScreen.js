import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import invoicePage from "../../../assets/invoicePage.png";
import Frame from "../../../assets/Frame.png";

const { width, height } = Dimensions.get('window');

export default function InvoiceLayoutScreenfun({ navigation, route }) {
    const [invoices, setInvoices] = useState([
        {
            id: '92',
            tenantname: 'Don Draper',
            amount: '$400',
            date: '22/7/24',
            status: 'Paid',
        }
    ]);

    useEffect(() => {
        if (route.params) {
            const { tenantname, amount, date, status } = route.params;
            const newInvoice = {
                id: Math.floor(Math.random() * 1000).toString(),
                tenantname,
                amount,
                date,
                status,
            };
            setInvoices([newInvoice, ...invoices]);
        }
    }, [route.params]);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card_sty}>
            <Text style={styles.top_text}>Invoice ID #{item.id}</Text>
            <View style={styles.body_cont}>
                <FontAwesome5 name="user-alt" size={width * 0.06} color="black" style={styles.icon_style} />
                <Text style={styles.text_style}>{item.tenantname}</Text>
            </View>
            <View style={styles.body_cont}>
                <Image source={Frame} style={styles.frame_style} />
                <Text style={styles.text_style}>{item.amount}</Text>
            </View>
            <View style={styles.body_cont}>
                <FontAwesome6 name="calendar-alt" size={width * 0.06} color="black" style={styles.icon_style} />
                <Text style={styles.text_style}>{item.date}</Text>
            </View>
            <View style={styles.body_last}>
                <MaterialCommunityIcons name="check-circle-outline" size={width * 0.065} color="black" style={styles.icon_style} />
                <Text style={[styles.txt_status, item.status === 'Paid' ? styles.txt_paid : styles.txt_due]}>
                    {item.status}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Rento</Text>
            </View>
            <View style={styles.img_cont}>
                <Image source={invoicePage} style={styles.img_style} />
            </View>
            <Text style={styles.threads_head}>Tenants Rent Invoices</Text>
            <FlatList
                data={invoices}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: height * 0.05, marginBottom: height * 0.05 }}
            />
            <TouchableOpacity style={styles.login_style} onPress={() => navigation.navigate('InvoiceAddScreenfun')}>
                <Text style={styles.login_text_style}>Add Invoice</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
    },
    header: {
        paddingTop: height * 0.02,
        paddingLeft: width * 0.03,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom: 1,
        marginBottom: 0,
    },
    headerText: {
        fontFamily: 'Shrikhand',
        fontSize: height * 0.07,
        marginBottom: 0,
    },
    img_cont: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    img_style: {
        display: 'flex',
        resizeMode: 'contain',
        height: height * 0.25,
        width: width * 0.95,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    threads_head: {
        fontFamily: 'Mulish_small',
        fontSize: height * 0.035,
        paddingLeft: width * 0.03,
        marginBottom: height * 0.02,
    },
    card_sty: {
        backgroundColor: "#dcdcdc",
        borderRadius: width * 0.04,
        padding: width * 0.05,
        height: height * 0.35,
        paddingTop: height * 0.01,
        marginLeft: width * 0.02,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: height * 0.01,
        },
        shadowOpacity: 0.3,
        elevation: 4,
        marginBottom: height * 0.01,
    },
    top_text: {
        fontFamily: 'Mulish_small',
        fontSize: height * 0.025,
        marginBottom: height * 0.01,
    },
    body_cont: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        padding: height * 0.01,
        marginBottom: height * 0.01,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
    },
    body_last: {
        display: 'flex',
        flexDirection: 'row',
        padding: height * 0.01,
        marginTop: height * 0.01,
    },
    icon_style: {
        marginLeft: width * 0.12,
        marginRight: width * 0.02,
        alignSelf: 'flex-start',
    },
    text_style: {
        fontFamily: 'Mulish_small',
        fontSize: height * 0.028,
        marginLeft: width * 0.15,
        textAlign: 'left',
    },
    txt_status: {
        fontFamily: 'Mulish_small',
        fontSize: height * 0.025,
        padding: height * 0.01,
        borderRadius: height * 0.01,
        marginLeft: width * 0.12,
        paddingLeft: width * 0.07,
        paddingRight: width * 0.07,
    },
    txt_paid: {
        backgroundColor: 'green',
        color: 'white',
 borderRadius: height * 0.03,
    },
    txt_due: {
        backgroundColor: 'yellow',
        color: 'black',
        borderRadius:10,
        borderRadius: height * 0.03,

    },
    login_style: {
        backgroundColor: "#c71585",
        padding: height * 0.015,
        width: width * 0.75,
        marginTop: height * 0.03,
        borderRadius: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.06,
        marginLeft: width * 0.05,
        shadowColor: "black",
        shadowOffset: {
            width: width * 0.01,
            height: height * 0.015,
        },
        shadowOpacity: 0.45,
        shadowRadius: height * 0.01,
        elevation: 5,
    },
    login_text_style: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: height * 0.035,
    },
    frame_style: {
        height: height * 0.03,
        width: height * 0.03,
        marginLeft: width * 0.12,
        marginRight: width * 0.02,
    }
});
