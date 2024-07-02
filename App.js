import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreenfun from './src/components/LoginScreen';
import MainScreenfun from './src/components/MainScreen';
import MessagePageScreenfun from './src/components/messages/MessagePageScreen';
import MessageLayoutScreenfun from './src/components/messages/MessageLayoutScreen';
import InvoiceLayoutScreenfun from './src/components/invoices/InvoiceLayoutScreen';
import SurveyLayoutScreenfun from './src/components/surveys/SurveyLayoutScreen';
import MessageStackScreenfun from './src/components/messages/MessageStackScreen';
import InvoiceStackScreenfun from './src/components/invoices/InvoiceStackScreen';
import SurveyStackScreenfun from './src/components/surveys/SurveyStackScreen';
import InvoiceAddScreenfun from './src/components/invoices/InvoiceAddScreen';
import SurveyAnalyticsScreenfun from './src/components/surveys/SurveyAnalyticsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Shrikhand: require('./assets/fonts/Shrikhand.ttf'),
    Mulish_small: require('./assets/fonts/Mulish-ExtraBoldItalic.ttf'),
    Mulish_large: require('./assets/fonts/Mulish-BlackItalic.ttf'),
  });

  if (!loaded) {
    return null; // Render a loading component or screen here if needed
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreenfun} 
          options={{ headerShown: false }} // Optionally hide the header
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreenfun} 
          options={{ headerShown: false }} // Optionally hide the header
        />
            </Stack.Navigator>
    </NavigationContainer>
  );
}
