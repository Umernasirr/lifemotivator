import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Switch,
  Divider,
  Button,
  Card,
  TextInput,
} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={globalStyles.background}>
      {/* colorr color and then white, alternative of the other one */}
      <LinearGradient
        colors={[
          globalTheme.colors.accent2,
          globalTheme.colors.accent2,
          globalTheme.colors.white,
        ]}
        style={globalStyles.linearGradient}>
        <View style={styles.sectionTop}>
          <Text style={styles.subText}>Kevin Wang</Text>
          <Text style={styles.emailText}>kevin.wang@gmail.com</Text>
        </View>

        <View style={styles.sectionBottom}>
          <View>
            <TextInput
              label=""
              value={''}
              style={styles.input}
              onChangeText={() => {}}
              mode="outlined"
              placeholder="Enter your Email"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  sectionTop: {
    marginTop: 40,
    borderRadius: 10,
    textAlign: 'center',

    padding: 10,
    margin: 10,
  },

  subText: {
    color: 'white',
    fontFamily: globalTheme.font.medium,
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },

  emailText: {
    color: 'white',
    fontFamily: globalTheme.font.medium,
    fontSize: 18,
    textAlign: 'center',
  },

  card: {
    margin: 20,
  },

  sectionBottom: {},

  input: {
    margin: 10,
  },
});
