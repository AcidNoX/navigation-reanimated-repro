import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MyContext} from '../App';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'Red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export const LoggedOutScreen: React.FC = () => {
  const context = useContext(MyContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={{backgroundColor: 'black', padding: 16, marginTop: 32}}
        onPress={() => context.setIsLoggedIn(!context.isLoggedIn)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
      </Pressable>
    </View>
  );
};
