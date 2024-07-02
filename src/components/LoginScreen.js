import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function LoginScreenfun({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dummyUsername = 'ethan.hunt';
  const dummyPassword = 'entity!2025';

  const HandleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Validation Error', 'Please enter username and password');
    } else if (username !== dummyUsername || password !== dummyPassword) {
      Alert.alert('Validation Error', 'Incorrect username or password');
    } else {
      navigation.navigate('MainScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading_container}>
        <Text style={styles.heading_txt_style}>Rento</Text>
        <Text style={styles.heading_desc_style}>All-in-1 Rent App</Text>
      </View>
      <View>
        <View style={styles.input_style}>
          <FontAwesome5 name="user-alt" size={height * 0.035} color="black" style={{ marginLeft: width * 0.01 }} />
          <TextInput
            placeholder="Enter username"
            style={styles.username_style}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.input_style}>
          <FontAwesome5 name="unlock-alt" size={height * 0.035} color="black" style={{ marginLeft: width * 0.01 }} />
          <TextInput
            placeholder="Enter password"
            style={styles.password_style}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.login_style} onPress={HandleLogin}>
          <Text style={styles.login_text_style}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05,
  },
  heading_desc_style: {
    textAlign: 'center',
    fontFamily: 'Mulish_small',
    fontSize: height * 0.03,
  },
  heading_txt_style: {
    fontFamily: 'Shrikhand',
    textAlign: 'center',
    fontSize: height * 0.07,
  },
  username_style: {
    borderColor: 'transparent',
    flex: 1,
    marginLeft: width * 0.02,
    fontSize: height * 0.025,
  },
  password_style: {
    borderColor: 'transparent',
    flex: 1,
    marginLeft: width * 0.02,
    fontSize: height * 0.025,
  },
  login_style: {
    backgroundColor: "#c71585",
    padding: height * 0.02,
    width: width * 0.8,
    marginTop: height * 0.03,
    borderRadius: height * 0.01,
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 5.84,
    elevation: 5,
  },
  login_text_style: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: height * 0.03,
  },
  input_style: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#d3d3d3",
    width: width * 0.8,
    height: height * 0.07,
    padding: 5,
    marginVertical: height * 0.01,
    borderRadius: height * 0.01,
    marginBottom: height * 0.015,
    fontSize: height * 0.025,
  },
});
