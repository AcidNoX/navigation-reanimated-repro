import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {MyContext} from './App';
import {HomeScreen} from './screens/home-screen';
import {LoggedOutScreen} from './screens/logged-out-screen';

const OnboardingStack = createNativeStackNavigator();
const TabsStack = createBottomTabNavigator();

export const NavigationStacks: React.FC = () => {
  const context = useContext(MyContext);

  if (context.isLoggedIn) {
    return (
      <TabsStack.Navigator>
        <TabsStack.Screen name="HomeTab1" component={HomeScreen} />
        <TabsStack.Screen name="HomeTab2" component={HomeScreen} />
      </TabsStack.Navigator>
    );
  }

  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="HomeScreen" component={LoggedOutScreen} />
    </OnboardingStack.Navigator>
  );
};
