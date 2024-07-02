import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyLayoutScreenfun from "./SurveyLayoutScreen";
import SurveyAnalyticsScreenfun from "./SurveyAnalyticsScreen";
import SurveyScreensfun from "./SurveyScreens";

const SurveyStack = createNativeStackNavigator();

export default function SurveyStackScreenfun() {
    return (
    <SurveyStack.Navigator >

<SurveyStack.Screen 
      name="SurveyScreensfun" 
      component={SurveyScreensfun} 
      options={{ headerShown: false }} // Optionally hide the header
    />
       <SurveyStack.Screen 
      name="SurveyLayoutScreenfun" 
      component={SurveyLayoutScreenfun} 
      options={{ headerShown: false }} // Optionally hide the header
    />
      <SurveyStack.Screen 
      name="SurveyAnalyticsScreenfun" 
      component={SurveyAnalyticsScreenfun} 
      options={{ headerShown: false }} // Optionally hide the header
    />

  </SurveyStack.Navigator>
    );
}