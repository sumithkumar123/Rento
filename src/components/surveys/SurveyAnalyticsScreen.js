import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import surveyPage from "../../../assets/surveyPage.png";
import bargraph from "../../../assets/bargraph.jpeg";

// import BarGraph from './Bargraph';

const { width, height } = Dimensions.get('window');
const isLargeScreen = width >= 768;

export default function SurveyAnalyticsScreenfun({ data, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Rento</Text>
        <TouchableOpacity style={styles.back_style} onPress={() => navigation.navigate('SurveyLayoutScreenfun')}>
          <Text style={styles.back_text_style}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.img_cont}>
        <Image source={surveyPage} style={styles.img_style} />
        <Text style={styles.threads_head}>Tenant Survey</Text>
        <View style={styles.ques_cont}>
          <View style={styles.ques_q}><Text style={styles.ques_t}>Q</Text></View>
          <Text style={styles.ques_text}>Which tenant is creating most noise in apartment?</Text>
        </View>
        <View style={styles.analytics_cont}>
          <Text style={styles.analytics_text}>Survey Analytics (Dummy)</Text>
          <View >
            {/* <BarGraph data={data} /> */}
            <Image source={bargraph} style={styles.graph_sty} />
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: isLargeScreen ? 30 : 20,
    paddingRight: isLargeScreen ? 30 : 20,
  },
  header: {
    paddingTop: isLargeScreen ? 20 : 15,
    paddingLeft: isLargeScreen ? 15 : 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 1,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    height: isLargeScreen ? 90 : 80,
  },
  headerText: {
    fontFamily: 'Shrikhand',
    fontSize: isLargeScreen ? 68 : 58,
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
    height: isLargeScreen ? 250 : 200,
    width: isLargeScreen ? 420 : 370,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  threads_head: {
    fontFamily: 'Mulish_small',
    fontSize: isLargeScreen ? 30 : 24,
    paddingLeft: isLargeScreen ? 15 : 10,
    marginBottom: isLargeScreen ? 25 : 20,
  },
  ques_cont: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#dcdcdc",
    borderRadius: 15,
    padding: isLargeScreen ? 20 : 15,
    paddingRight: isLargeScreen ? 20 : 15,
    width: '95%',
    alignSelf: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    elevation: 4,
  },
  ques_q: {
    height: isLargeScreen ? 50 : 40,
    width: isLargeScreen ? 50 : 40,
    borderRadius: 50,
    backgroundColor: '#c71585',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ques_t: {
    fontSize: isLargeScreen ? 24 : 20,
    fontWeight: '800',
    textAlign: 'center',
    color: 'white',
  },
  ques_text: {
    fontFamily: 'Mulish_large',
    fontSize: isLargeScreen ? 18 : 16,
    padding: 4,
    flexShrink: 1,
  },
  back_style: {
    backgroundColor: "#c71585",
    padding: 3,
    marginTop: 0,
    width: isLargeScreen ? 90 : 80,
    borderRadius: 10,
    alignSelf: 'flex-end',
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 5.84,
    elevation: 8,
  },
  back_text_style: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: isLargeScreen ? 20 : 18,
    textAlign: 'center',
  },
  analytics_cont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  analytics_text: {
    textAlign: 'center',
    fontFamily: "Mulish_small",
  },
 
  graph_sty :{
    display: 'flex',
    resizeMode: 'contain',
    height: isLargeScreen ? 350 : 300,
    width: isLargeScreen ? 420 : 370,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  }
});
