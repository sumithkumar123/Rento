import react from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import messagePage from "../../../assets/messagePage.png"
import { Avatar, Card, Badge } from 'react-native-paper';

export default function MessageLayoutScreenfun({navigation}) {
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Rento</Text>
            </View>
            <View style={styles.img_cont}>
                <Image source={messagePage} style={styles.img_style} />
            </View>

            <View>
                <Text style={styles.threads_head}>Tenants chat threads</Text>
            </View>
            <View style={styles.cards}>
                <TouchableOpacity style={styles.card_sty} onPress={
                    () => {
                        navigation.navigate('MessagePageScreenfun', {text:"Joe Goldberg"});                    }
                }>
                    <Card.Title
                        title="Joe Goldberg"
                        left={(props) => <Avatar.Text size={58} style={styles.avatar_sty} label="J" 
                        labelStyle={styles.avatar_label}/>}
                        
                        right={(props) => <Badge size={27} style={styles.badge_sty} >1</Badge>
                        }
                        titleStyle={styles.card_title}
                        
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.card_sty} 
                onPress={
                    () => {
                        navigation.navigate('MessagePageScreenfun', {text:"Don Draper"});                    }
                }>
                    <Card.Title
                        title="Don Draper"
                        left={(props) => <Avatar.Text size={58} style={{backgroundColor:'#3cb371'}} label="D" 
                        labelStyle={styles.avatar_label}/>}
                        
                        right={(props) => <Badge size={27} style={styles.badge_sty} >3</Badge>
                        }
                        titleStyle={styles.card_title}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.card_sty}
                onPress={
                    () => {
                        navigation.navigate('MessagePageScreenfun', {text:"Walden Schmidt"});                    }
                }>
                    <Card.Title
                        title="Walden Schmidt"
                        left={(props) => <Avatar.Text size={58}  style={{backgroundColor:'#b8860b',
                            paddingLeft:0
                        }} label="W" 
                        labelStyle={styles.avatar_label}/>}
                        
                        right={(props) => <Badge size={27} style={styles.badge_sty} >2</Badge>
                        }
                        titleStyle={styles.card_title}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.card_sty}
                onPress={
                    () => {
                        navigation.navigate('MessagePageScreenfun', {text:"Harvey Spectre"});                    }
                }>
                    <Card.Title
                        title="Harvey Spectre"
                        left={(props) => <Avatar.Text size={58}  style={{backgroundColor:'#9370db',
                            paddingLeft:0
                        }} 
                        label="H" 
                        labelStyle={styles.avatar_label}/>}
                        
                        right={(props) =>{}
                        }
                        titleStyle={styles.card_title}

                    />
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 25,
    },
    header: {

        paddingTop: 15,
        paddingLeft: 10,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom: 1,
        marginBottom: 0
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
        fontSize: 28,
        paddingLeft: 10,
        marginBottom:20

    },
    card_sty: {
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft:0,
        fontFamily: 'Mulish_large',
        shadowColor: "black", // Shadow color
        shadowOffset: {
            width: 0, // Horizontal shadow offset
            height: 5, // Vertical shadow offset
        },
        shadowOpacity: 0.3, // Shadow opacity
        elevation: 4, // Required for Android shadow

    },
    avatar_sty: {
        backgroundColor: '#00bfff',
        fontFamily: 'Mulish_large'

    },
    badge_sty: {
        backgroundColor: '#c71585',
        marginRight: 15,
        fontFamily: 'Mulish_large',
        fontSize:12,
    },
    cards: {
        paddingLeft: 10,
        fontFamily: 'Mulish_large'
    },
    card_title: {
        fontSize: 20,
        marginLeft:15,
        fontWeight:'900',
        fontStyle:'italic',
        color:'black'

    }, 
    avatar_label: {
        fontWeight:'900',
        fontStyle:'italic',
        color:'black'
    }

})// fill the card to image size and give marginleft and right to card