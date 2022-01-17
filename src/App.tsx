import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationStacks} from './stacks';

export const MyContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (val: boolean) => {},
});

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MyContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <NavigationStacks />
            <StatusBar hidden />
          </NavigationContainer>
        </SafeAreaProvider>
      </MyContext.Provider>
    </GestureHandlerRootView>
  );
};

export default App;
