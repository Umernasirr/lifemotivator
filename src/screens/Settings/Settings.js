import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Switch, Divider, Button} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = ({navigation}) => {
  const [firstSwitch, setFirstSwitch] = useState(false);
  const [secondSwitch, setSecondSwitch] = useState(false);
  const [thirdSwitch, setThirdSwitch] = useState(false);

  const onToggleSwitch = (setCallback, value) => {
    console.log(value);
    setCallback(!value);
    console.log(setCallback);
  };
  return (
    <View style={globalStyles.background}>
      <LinearGradient
        colors={[
          globalTheme.colors.white,
          globalTheme.colors.white,
          globalTheme.colors.accent2,
        ]}
        style={styles.linearGradient}>
        <View style={{margin: 20}}>
          <View
            style={{
              flexDirection: 'row',
              margin: 30,
              justifyContent: 'center',
            }}>
            <Ionicons
              style={{marginRight: 20}}
              name="settings"
              size={28}
              color={globalTheme.colors.primary}
            />
            <Text style={styles.subheading}>Settings</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text>Enable Notifications</Text>

            <Switch
              onValueChange={() => onToggleSwitch(setFirstSwitch, firstSwitch)}
              value={firstSwitch}
              color={globalTheme.colors.primary}
              style={{position: 'absolute', right: 0}}
            />
          </View>

          <Divider style={{margin: 20}} />

          <View style={{flexDirection: 'row'}}>
            <Text>Lorem Ipsum Dolar</Text>

            <Switch
              onValueChange={() =>
                onToggleSwitch(setSecondSwitch, secondSwitch)
              }
              value={secondSwitch}
              color={globalTheme.colors.primary}
              style={{position: 'absolute', right: 0}}
            />
          </View>

          <Divider style={{margin: 20}} />

          <View style={{flexDirection: 'row'}}>
            <Text>Lorem Ipsum Dolar</Text>

            <Switch
              onValueChange={() => onToggleSwitch(setThirdSwitch, thirdSwitch)}
              value={thirdSwitch}
              color={globalTheme.colors.primary}
              style={{position: 'absolute', right: 0}}
            />
          </View>

          <Divider style={{margin: 20}} />

          <View style={{margin: 20}} />
          <Button
            mode="contained"
            icon="login"
            style={styles.button}
            color={globalTheme.colors.primary}
            onPress={() => navigation.navigate('Login')}>
            Logout
          </Button>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    flex: 1,
  },

  subheading: {
    fontSize: 20,
    color: globalTheme.colors.primary,
    fontFamily: globalTheme.font.bold,
    textAlign: 'center',
  },
});
