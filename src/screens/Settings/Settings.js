import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';

const Settings = ({navigation}) => {
  return (
    <View style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Text style={styles.heading}>Sign Up</Text>

        <Text style={styles.subheading}>Live Everyday with a reason</Text>

        <Button
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
          mode="contained">
          Logout of the Application
        </Button>
        <View style={globalStyles.content} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontFamily: globalTheme.font.semiBold,
    color: globalTheme.colors.dark,
  },

  heading2: {
    fontSize: 24,
    fontFamily: globalTheme.font.semiBold,
    color: globalTheme.colors.dark,
    margin: 20,
  },

  calenderStrip: {
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    borderRadius: 40,
    alignSelf: 'center',
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

  button: {padding: 10, paddingHorizontal: 20},

  input: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    margin: 10,
  },
});
