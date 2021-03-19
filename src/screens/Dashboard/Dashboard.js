import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalTheme, {globalStyles} from '../../styles/index';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import Quote from '../../components/Quote';
import CountDown from 'react-native-countdown-component';
import MyModal from './Modal';
import data from '../../data/country-mock-data.json';
import {Platform} from 'react-native';
import {showNotificationAndroid} from '../../android-notification';
import {showNotificationiOS} from '../../android-notification';

const Dashboard = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(true);
  const [firstTime, setFirstTime] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const asyncFunc = async () => {
      const isSeen = await AsyncStorage.getItem('seen');

      if (isSeen === 'true') {
        setShowModal(false);
        setFirstTime(false);
      } else {
        setFirstTime(true);
      }
    };

    getData();

    asyncFunc().then(() => {});

    if (years > 0) {
      Platform.OS === 'ios'
        ? showNotificationiOS('Life Motivator', `You have ${years} years left!`)
        : showNotificationAndroid(
            'Life Motivator',
            `You have ${years} years left!`,
          );
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const isSeen = await AsyncStorage.getItem('seen');

      if (isSeen === 'true') {
        setShowModal(false);
        setFirstTime(false);

        getData();
      } else {
        setShowModal(true);
        setFirstTime(true);
      }
    });
    getData();

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const getData = async (key, callback) => {
    try {
      computingSecondsUtilDeath(
        await AsyncStorage.getItem('dob'),
        await AsyncStorage.getItem('gender'),
        await AsyncStorage.getItem('country'),
      );
    } catch (e) {
      // error reading value
    }
  };

  const computingSecondsUtilDeath = (dob, gender, country) => {
    const age = computingAge(dob);

    const differenceInYears = computingDifferenceInYears(age, gender);

    setYears(Math.round(differenceInYears));
    setSeconds(differenceInYears * 31536000);
  };
  const computingAge = (dob) => {
    const years = moment().diff(dob, 'years', true);
    return years;
  };
  const computingDifferenceInYears = (age, gender) => {
    let lifeExpectancy;

    data.map((cntry) => {
      if (cntry.id === 44) {
        if (gender.toLowerCase() == 'male') {
          lifeExpectancy = cntry.male;
        } else {
          lifeExpectancy = cntry.female;
        }
      }
    });

    return lifeExpectancy - age;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {firstTime ? (
        <MyModal
          modalVisible={showModal}
          setFirstTime={setFirstTime}
          firstTime={firstTime}
          setModalVisible={setShowModal}
        />
      ) : (
        <View>
          <View style={styles.sectionTop}>
            <View style={styles.calenderStrip}>
              <Text style={styles.heading}>Welcome Kevin!</Text>

              {/* <CalendarStrip

                selectedDate={selectedDate}
                onPressDate={(date) => {
                  setSelectedDate(date);
                }}
                onPressGoToday={(today) => {}}
                onSwipeDown={() => {}}
                markedDate={[]}
                weekStartsOn={0}
              /> */}
            </View>
          </View>

          <View style={styles.sectionBottom}>
            <Quote text="Don't let yesterday take up too much of today." />

            <View style={{margin: 0}}>
              <Text style={styles.heading2}>
                Time is Precious, Don't let it slip away.
              </Text>
            </View>

            <CountDown
              until={seconds}
              size={35}
              onFinish={() => alert('Finished')}
              digitStyle={{backgroundColor: '#FFF'}}
              digitTxtStyle={{
                color: globalTheme.colors.primary,
                fontSize: 26,
              }}
              timeLabelStyle={{color: 'white'}}
              timeToShow={['D', 'H', 'M', 'S']}
              timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
            />

            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                color: 'white',
                fontFamily: globalTheme.font.medium,
                fontSize: 16,
              }}>
              That's an Estimated
              <Text style={{fontFamily: globalTheme.font.bold}}>
                {' ' + years + ' '}
              </Text>
              Years!
            </Text>

            <Button
              style={{
                backgroundColor: 'white',
                marginHorizontal: 40,
                marginTop: 20,
              }}
              onPress={getData}>
              {' '}
              Update Countdown
            </Button>
            <Divider
              style={{
                backgroundColor: 'white',
                marginTop: 10,
                marginHorizontal: 20,
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
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
    fontSize: 18,
    fontFamily: globalTheme.font.medium,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },

  calenderStrip: {
    backgroundColor: 'white',

    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',

    borderColor: globalTheme.colors.primary,
    borderStyle: 'dotted',

    borderBottomWidth: 3,
    marginHorizontal: 20,
  },

  sectionTop: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },

  sectionBottom: {
    backgroundColor: globalTheme.colors.primary,
    padding: 15,
    borderRadius: 10,
    paddingBottom: 1000,
    margin: 10,
  },
});
