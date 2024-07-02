import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get('window');
const isLargeScreen = width >= 768;

export default function SurveyLayoutScreenfun({ onOptionPress, navigation }) {
  const [current, setCurrent] = useState("test");

  const handlePress = (value) => {
    setCurrent(value);
    onOptionPress(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Rento</Text>
      </View>
      <View style={styles.img_cont}>
        <Image source={require("../../../assets/surveyPage.png")} style={styles.img_style} />
      </View>
      <View>
        <Text style={styles.threads_head}>Tenant Survey</Text>
      </View>
      <View>
        <View style={styles.ques_cont}>
          <View style={styles.ques_q}><Text style={styles.ques_t}>Q</Text></View>
          <Text style={styles.ques_text}>Which tenant is creating most noise in apartment?</Text>
        </View>
        <View style={{ marginBottom: isLargeScreen ? 15 : 10 }}>
          {["a", "b", "c", "d"].map((value, index) => (
            <TouchableOpacity key={value} style={styles.opt_cont} onPress={() => handlePress(value)}>
              <View style={[
                styles.radioButtonItem,
                { backgroundColor: current === value ? "black" : "white" }
              ]} />
              <Text style={styles.radioButtonLabel}>
                {index === 0 && "A. Don Draper"}
                {index === 1 && "B. Harvey Spectre"}
                {index === 2 && "C. Walden Schmidt"}
                {index === 3 && "D. Joe Goldberg"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.login_style} onPress={() => navigation.navigate('SurveyAnalyticsScreenfun')}>
        <Text style={styles.login_text_style}>Submit Survey</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>

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
  },
  header: {
    paddingLeft: isLargeScreen ? 35 : 25,
    paddingTop: isLargeScreen ? 20 : 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 1,
    marginBottom: 0
  },
  headerText: {
    fontFamily: 'Shrikhand',
    fontSize: isLargeScreen ? 68 : 58,
    marginBottom: 0
  },
  threads_head: {
    fontFamily: 'Mulish_small',
    fontSize: isLargeScreen ? 34 : 28,
    paddingLeft: isLargeScreen ? 35 : 25,
    marginBottom: isLargeScreen ? 25 : 20
  },
  img_cont: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  img_style: {
    resizeMode: 'contain',
    height: isLargeScreen ? 250 : 210,
    width: isLargeScreen ? 420 : 370,
    marginLeft: 10,
  },
  ques_cont: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#dcdcdc",
    borderRadius: 15,
    padding: isLargeScreen ? 25 : 15,
    height: 'auto',
    paddingTop: isLargeScreen ? 15 : 10,
    marginLeft: isLargeScreen ? 30 : 20,
    marginRight: isLargeScreen ? 25 : 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    elevation: 4,
  },
  opt_cont: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#dcdcdc",
    borderRadius: 15,
    marginTop: isLargeScreen ? 15 : 10,
    padding: 10,
    height: isLargeScreen ? 50 : 40,
    paddingTop: isLargeScreen ? 15 : 10,
    marginLeft: isLargeScreen ? 30 : 20,
    marginRight: isLargeScreen ? 25 : 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    elevation: 4,
  },
  ques_q: {
    height: isLargeScreen ? 60 : 50,
    width: isLargeScreen ? 60 : 50,
    borderRadius: 50,
    backgroundColor: '#c71585',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ques_t: {
    fontSize: isLargeScreen ? 36 : 30,
    fontWeight: '800',
    textAlign: 'center',
    color: 'white',
  },
  ques_text: {
    fontFamily: 'Mulish_large',
    fontSize: isLargeScreen ? 24 : 20,
    padding: 3,
    marginRight: 8,
    paddingRight: 10,
    flexShrink: 1,
  },
  radioButtonItem: {
    width: isLargeScreen ? 25 : 20,
    height: isLargeScreen ? 25 : 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    marginRight: 10,
  },
  radioButtonLabel: {
    fontFamily: 'Mulish_large',
    fontSize: isLargeScreen ? 20 : 18,
  },
  login_style: {
    backgroundColor: "#c71585",
    padding: 10,
    width: isLargeScreen ? 350 : 300,
    marginTop: isLargeScreen ? 30 : 20,
    borderRadius: 10,
    marginLeft: isLargeScreen ? 70 : 50,
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
    fontSize: isLargeScreen ? 32 : 28,
  },
});
