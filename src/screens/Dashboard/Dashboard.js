import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import Quote from '../../components/Quote';
import CountDown from 'react-native-countdown-component';

const Dashboard = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.sectionTop}>
        <View style={styles.calenderStrip}>
          <Text style={styles.heading}>Welcome Kevin!</Text>

          <CalendarStrip
            selectedDate={new Date()}
            onPressDate={(date) => {}}
            onPressGoToday={(today) => {}}
            onSwipeDown={() => {}}
            markedDate={[]}
            weekStartsOn={0}
          />
        </View>
      </View>

      <View style={styles.sectionBottom}>
        <Quote />

        <Text style={styles.heading2}>You will Live till</Text>

        <CountDown
          until={60 * 10 + 30}
          size={30}
          onFinish={() => alert('Finished')}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: globalTheme.colors.primary}}
          timeLabelStyle={{color: 'white'}}
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
    fontSize: 24,
    fontFamily: globalTheme.font.medium,
    color: globalTheme.colors.dark,
  },

  heading2: {
    fontSize: 24,
    fontFamily: globalTheme.font.medium,
    color: 'white',
    marginVertical: 20,
  },

  calenderStrip: {
    backgroundColor: 'white',
    padding: 0,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',

    borderColor: globalTheme.colors.primary,
    borderWidth: 2,
  },

  sectionTop: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
  },

  sectionBottom: {
    backgroundColor: globalTheme.colors.primary,
    padding: 20,
    borderRadius: 10,
    paddingBottom: 100,
  },
});
