import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import globalTheme, {globalStyles} from '../../styles/index';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import Quote from '../../components/Quote';
import CountDown from 'react-native-countdown-component';
import MyModal from './Modal';

const Dashboard = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  return (
    <View style={{backgroundColor: 'white'}}>
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

            <View style={{margin: 10}} />
            <Text style={styles.heading2}>
              Time is Precious, Don't let it slip away.
            </Text>

            <CountDown
              until={60 * 10 + 30}
              size={30}
              onFinish={() => alert('Finished')}
              digitStyle={{backgroundColor: '#FFF'}}
              digitTxtStyle={{color: globalTheme.colors.primary}}
              timeLabelStyle={{color: 'white'}}
              timeToShow={['Y', 'M', 'D', 'H']}
              timeLabels={{d: 'YY', h: 'MM', m: 'DD', s: 'HH'}}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: globalTheme.font.medium,
    color: globalTheme.colors.dark,
    margin: 10,
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
    padding: 20,
    borderRadius: 10,
    paddingBottom: 1000,
    margin: 10,
  },
});
