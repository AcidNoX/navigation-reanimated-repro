import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
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

export const HomeScreen: React.FC = () => {
  const context = useContext(MyContext);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn}>
        <Text>This is text with entering transition</Text>
      </Animated.View>
      <Button
        onPress={() => context.setIsLoggedIn(!context.isLoggedIn)}
        title="Logout"
      />
    </View>
  );
};
