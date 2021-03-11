import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Text style={styles.heading}>Sign Up</Text>

        <Text style={styles.subheading}>Live Everyday with a reason</Text>

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

          <TextInput
            label="Confirm Password"
            value={password}
            style={styles.input}
            mode="outlined"
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your Password again"
          />
        </View>

        <Button
          mode="contained"
          icon="login"
          style={styles.button}
          color={globalTheme.colors.primary}
          onPress={() => navigation.navigate('Login')}>
          Register Account
        </Button>

        <Text style={styles.subText}>Or</Text>
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

export default SignUp;

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

  subText: {
    fontSize: 18,
    color: globalTheme.colors.primary,
    fontFamily: globalTheme.font.light,

    marginTop: 20,
    marginBottom: 10,
  },

  lottieSplash: {
    width: 300,
  },

  button: {padding: 10, paddingHorizontal: 20},

  input: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    margin: 10,
  },
});
