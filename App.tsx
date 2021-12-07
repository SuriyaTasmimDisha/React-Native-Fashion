import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './src/Screens/Onboarding';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
    <AuthenticationStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
    />
  </AuthenticationStack.Navigator>
);

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    // <GestureHandlerRootView>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
}
