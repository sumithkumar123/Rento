import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagePageScreenfun from "./MessagePageScreen";
import MessageLayoutScreenfun from "./MessageLayoutScreen";

const MessagesStack = createNativeStackNavigator();

export default function MessageStackScreenfun() {
    return (
    <MessagesStack.Navigator >

    
       <MessagesStack.Screen 
      name="MessageLayoutScreenfun" 
      component={MessageLayoutScreenfun} 
      options={{ headerShown: false }} // Optionally hide the header
    />
      <MessagesStack.Screen 
      name="MessagePageScreenfun" 
      component={MessagePageScreenfun} 
      options={{ headerShown: false }} // Optionally hide the header
    />

  </MessagesStack.Navigator>
    );
}