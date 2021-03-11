import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';
import CalendarStrip from 'react-native-slideable-calendar-strip';

import CountDown from 'react-native-countdown-component';

const Dashboard = ({navigation}) => {
  return (
    <View style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Text style={styles.heading}>Welcome Kevin!</Text>

        <View style={styles.calenderStrip}>
          <CalendarStrip
            selectedDate={new Date()}
            onPressDate={(date) => {}}
            onPressGoToday={(today) => {}}
            onSwipeDown={() => {}}
            markedDate={[]}
            weekStartsOn={0}
          />
        </View>

        <Text style={styles.heading2}>You will Live till</Text>

        <CountDown
          until={60 * 10 + 30}
          size={30}
          onFinish={() => alert('Finished')}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: globalTheme.colors.primary}}
          timeToShow={['D', 'H', 'M', 'S']}
          timeLabels={{d: 'DD', h: 'HH', m: 'MM', s: 'SS'}}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontFamily: globalTheme.font.medium,
    color: globalTheme.colors.dark,
  },

  heading2: {
    fontSize: 24,
    fontFamily: globalTheme.font.medium,
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
