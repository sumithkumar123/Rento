import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SurveyLayoutScreenfun from "./SurveyLayoutScreen";
import SurveyAnalyticsScreenfun from "./SurveyAnalyticsScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function SurveyScreensfun() {
  const [data, setData] = useState([
    { option: 'a', value: 10 },
    { option: 'b', value: 20 },
    { option: 'c', value: 15 },
    { option: 'd', value: 5 },
  ]);

  const handleSurveySubmit = (selectedOption) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.option === selectedOption ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  return (
    <Stack.Navigator initialRouteName="SurveyLayoutScreenfun">
    <Stack.Screen name="SurveyLayoutScreenfun"  options={{ headerShown: false }}>
      {props => <SurveyLayoutScreenfun {...props} onOptionPress={handleSurveySubmit} />}
    </Stack.Screen>
    <Stack.Screen name="SurveyAnalyticsScreenfun"  options={{ headerShown: false }}>
      {props => <SurveyAnalyticsScreenfun {...props} data={data} />}
    </Stack.Screen>
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
