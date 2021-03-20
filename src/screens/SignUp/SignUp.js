import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({navigation}) => {
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
        <View style={globalStyles.container}>
          <Text style={styles.heading}>Register Now!</Text>

          <Text style={styles.subheading}>Live Everyday with a reason</Text>

          <View style={styles.content}>
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

            <TextInput
              label="Confirm Password"
              value={password}
              style={styles.input}
              mode="outlined"
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password again"
            />
          </View>

          <View style={{margin: 10}} />
          <Button
            mode="contained"
            icon="login"
            style={styles.button}
            color={globalTheme.colors.primary}
            onPress={() => navigation.navigate('Login')}>
            Register Account
          </Button>

          <Button
            style={styles.button}
            color={globalTheme.colors.primary}
            onPress={() => navigation.navigate('Login')}>
            Login to Existing Account
          </Button>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;

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
    marginVertical: 10,
  },
  button: {margin: 10, padding: 10},

  input: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    margin: 10,
  },
});
