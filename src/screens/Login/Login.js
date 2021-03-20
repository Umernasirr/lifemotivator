import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import globalTheme, {globalStyles} from '../../styles/index';
import {Button, TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={globalStyles.background}>
      <LinearGradient
        colors={[
          globalTheme.colors.white,
          globalTheme.colors.white,
          globalTheme.colors.accent2,
        ]}
        style={globalStyles.linearGradient}>
        <View style={{margin: 16, marginTop: 40}}>
          <Text style={styles.heading}>Welcome, </Text>

          <Text style={styles.subheading}>Sign In To Continue!</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={globalStyles.content}>
            <TextInput
              label="Email"
              value={email}
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              mode="outlined"
              placeholder="Enter your Email"
            />

            <TextInput
              label="Password"
              value={password}
              style={styles.input}
              mode="outlined"
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password"
            />
          </View>

          <Button
            mode="contained"
            icon="login"
            style={styles.button}
            color={globalTheme.colors.primary}
            onPress={() => navigation.navigate('Life Motivator')}>
            Login
          </Button>

          <Text style={styles.subText}>Or</Text>

          <LottieView
            style={styles.lottieSplash}
            source={require('./lottie/login.json')}
            autoPlay
            loop
          />
          <Button
            style={styles.button}
            color={globalTheme.colors.primary}
            onPress={() => navigation.navigate('SignUp')}>
            Create an Account
          </Button>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontFamily: globalTheme.font.semiBold,
    color: globalTheme.colors.primary,
  },

  subheading: {
    fontSize: 18,
    color: globalTheme.colors.gray,
    fontFamily: globalTheme.font.medium,
    marginTop: 10,
  },

  subText: {
    fontSize: 18,
    color: globalTheme.colors.primary,
    fontFamily: globalTheme.font.regular,

    marginTop: 20,
    marginBottom: 10,
  },

  lottieSplash: {
    width: 180,
    position: 'absolute',
    bottom: -90,
    right: 10,
  },

  button: {padding: 10, paddingHorizontal: 80},

  input: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    margin: 10,
  },
});
