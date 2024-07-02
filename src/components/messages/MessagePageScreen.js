import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messagePage from '../../../assets/messagePage.png';

const { width, height } = Dimensions.get('window');

export default function MessagePageScreenfun({ navigation, route }) {
    const { text } = route.params;
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const storedMessages = await AsyncStorage.getItem(`messages_${text}`);
                if (storedMessages) {
                    setMessages(JSON.parse(storedMessages));
                } else {
                    setMessages([
                        { id: 1, text: 'Hey Ethan !', isLeft: true },
                        { id: 2, text: 'Wassup', isLeft: true },
                        { id: 3, text: `Hi ${text}..`, isLeft: false },
                        { id: 4, text: 'I\'ll give my rent tomorrow', isLeft: true },
                        { id: 5, text: 'Is it okay ?', isLeft: true },
                    ]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        loadMessages();
    }, [text]);

    useEffect(() => {
        const storeMessages = async () => {
            try {
                await AsyncStorage.setItem(`messages_${text}`, JSON.stringify(messages));
            } catch (error) {
                console.log(error);
            }
        };

        if (messages.length > 0) {
            storeMessages();
        }
    }, [messages, text]);

    const addText = () => {
        if (inputText.trim() === '') {
            return;
        }
        const newText = {
            id: messages.length + 1,
            text: inputText,
            isLeft: false, // Assuming the new message is from the user
        };
        setMessages([...messages, newText]);
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Rento</Text>
                </View>
                <TouchableOpacity style={styles.back_style} onPress={() => {
                    navigation.navigate('MessageLayoutScreenfun');
                }}>
                    <Text style={styles.back_text_style}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.img_cont}>
                <Image source={messagePage} style={styles.img_style} />
            </View>
            <View>
                <Text style={styles.threads_head}>Tenant Chat : {text} </Text>
            </View>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={item.isLeft ? styles.left_text : styles.right_text}>
                            {item.text}
                        </Text>
                    </View>
                )}
                style={styles.chat_body}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Type Something... "
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={addText} style={styles.sendButton}>
                    <FontAwesome name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {

        paddingTop: 15,
        paddingLeft: 10,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom: 1,
        marginBottom: 0,
        display: 'flex',
        flexDirection:'row',
        height:80,
    },
    headerText: {
        fontFamily: 'Shrikhand',
        fontSize: 58,
        marginBottom: 0
    },
    img_cont: {
        display: 'flex',

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    img_style: {
        display: 'flex',
        resizeMode: 'contain',
        height: 200,
        width: 370,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    threads_head: {
        fontFamily: 'Mulish_small',
        fontSize: 24,
        paddingLeft: 10,
        marginBottom: 20

    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20
    },
    input: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'left',
        marginRight: 5,
        fontFamily: 'Mulish_large',
        color: 'black',
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    sendButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#c71585',
        alignSelf: 'flex-end',
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15

    },
    chat_body: {
        flex: 1,
        backgroundColor: "#dcdcdc",
        borderRadius: 15,
        padding: 15,
        shadowColor: "black", // Shadow color
        shadowOffset: {
            width: 0, // Horizontal shadow offset
            height: 5, // Vertical shadow offset
        },
        shadowOpacity: 0.3, // Shadow opacity
        elevation: 4, // Required for Android shadow

    },
    left_text: {
        color: "black",
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        marginTop: 2,
        alignSelf: 'flex-start',
        borderRadius: height * 0.03,
        paddingRight: 40,
        fontSize: 22,
        fontWeight: '600'
    },
    right_text: {
        color: '#fff',
        padding: 10,
        backgroundColor: '#c71585',
        marginBottom: 5,
        marginTop: 2,
        alignSelf: 'flex-end',
        borderRadius: height * 0.03,
        fontSize: 22,
        fontWeight: '600'
    },
    back_style: {
        backgroundColor: "#c71585",
        padding: 3,
        marginTop:0,
        width: 80,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginLeft:100,
        marginBottom:10,
        shadowColor: "black", // Shadow color
        shadowOffset: {
            width: 4, // Horizontal shadow offset
            height: 5, // Vertical shadow offset
        },
        shadowOpacity: 0.45, // Shadow opacity
        shadowRadius: 5.84, // Shadow blur radius
        elevation: 8, // Required for Android shadow
    },
    back_text_style: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign:'center'
    },
})