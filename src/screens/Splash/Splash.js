import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';

import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Text style={styles.heading}>Life Motivator</Text>
        <Text style={styles.subheading}>Live Everyday with a reason</Text>

        <LottieView
          style={styles.lottieSplash}
          source={require('./lottie/splash.json')}
          autoPlay
          loop
        />

        <Button
          mode="contained"
          icon="login"
          style={styles.button}
          color={globalTheme.colors.primary}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up with Email
        </Button>

        <Button
          style={styles.button}
          color={globalTheme.colors.primary}
          onPress={() => navigation.navigate('Login')}>
          Login to Existing Account
        </Button>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontFamily: globalTheme.font.semiBold,
    color: globalTheme.colors.dark,
  },

  subheading: {
    fontSize: 18,
    color: globalTheme.colors.primary,
    fontFamily: globalTheme.font.light,
    margin: 16,
  },

  lottieSplash: {
    width: 300,
  },

  button: {padding: 10, paddingHorizontal: 40, marginTop: 10},
});
