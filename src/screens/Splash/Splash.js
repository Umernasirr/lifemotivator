import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';

import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={globalStyles.background}>
      <LinearGradient
        colors={[
          globalTheme.colors.white,
          globalTheme.colors.white,
          globalTheme.colors.accent2,
        ]}
        style={globalStyles.linearGradient}>
        <View style={globalStyles.container}>
          <View style={{marginTop: 100}} />
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
            onPress={() => navigation.navigate('Login')}>
            Get Started
          </Button>
        </View>
      </LinearGradient>

      <View style={styles.circleView2} />
      <View style={styles.circleView3} />
      <View style={styles.circleView1} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontFamily: globalTheme.font.semiBold,
    color: globalTheme.colors.dark,
    textAlign: 'center',
  },

  subheading: {
    fontSize: 18,
    color: globalTheme.colors.primary,
    fontFamily: globalTheme.font.light,
    margin: 16,
    textAlign: 'center',
  },

  lottieSplash: {
    width: 300,
  },

  button: {padding: 10, margin: 20, marginVertical: 10},

  circleView1: {
    position: 'absolute',
    width: 130,
    height: 130,
    top: -40,
    left: -40,
    backgroundColor: globalTheme.colors.primary,
    borderRadius: 75,
    opacity: 0.4,
  },

  circleView2: {
    position: 'absolute',
    width: 130,
    height: 130,
    top: -40,
    left: 40,
    backgroundColor: globalTheme.colors.primary,
    borderRadius: 75,
    opacity: 0.5,
  },

  circleView3: {
    position: 'absolute',
    width: 130,
    height: 130,
    top: 40,
    left: -40,
    backgroundColor: globalTheme.colors.primary,
    borderRadius: 75,
    opacity: 0.5,
  },
});
