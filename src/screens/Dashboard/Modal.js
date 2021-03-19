import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Autocomplete from 'react-native-autocomplete-input';
import DatePicker from 'react-native-date-picker';

// import {Ionicons} from '@expo/vector-icons';rrrr
import globalTheme, {globalStyles} from '../../styles';

import * as Animatable from 'react-native-animatable';
import {Button, Text, TextInput, RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';

import data from '../../data/country-mock-data.json';

const MyModal = ({modalVisible, setModalVisible, setFirstTime, firstTime}) => {
  const [showInput, setShowInput] = useState(false);
  const modalText = useRef();
  const [modalTxt, setModalText] = useState('Welcome to Life Motivator!');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState(0);
  const [gender, setGender] = useState('');
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);

  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState(new Date());
  const [query, setQuery] = useState('');

  useEffect(() => {
    const reshapeArray = data.map((country) => {
      return {
        value: country.id,
        label: country.name,
      };
    });

    setCountries(reshapeArray);
  }, []);

  const onPressNext = async () => {
    switch (count) {
      case 1:
        setModalText('What is your Country');

        setShowInput1(false);
        setShowInput2(true);
        break;

      case 2:
        setModalText('What is your Gender');

        setShowInput2(false);
        setShowInput3(true);
        break;

      case 3:
        setModalText(
          'Thank you! Now our system will estimate your life span. ',
        );

        storeData('seen', 'true');

        setShowInput3(false);

        // Calculate Life Estima'gen=te and Show

        // setModalText('Thank you! Now our system will estimate your life span. ');

        // Close Modal
        setTimeout(() => {
          setFirstTime(false);
        }, 3000);

        break;
    }
    setCount(count + 1);

    if (date) {
      storeData('dob', date.toString());
    }
    if (gender) {
      storeData('gender', gender);
    }
    if (country) {
      storeData('country', country.toString());
    }
  };
  const setDateToAsync = (e) => {
    // console.log(e);
    setDate(e);
  };

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
      console.log(key, 'keyerror');
      // saving error
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Animatable.Text
              style={styles.modalText}
              animation="fadeIn"
              iterationCount={1}
              duration={1000}
              onAnimationEnd={function () {
                modalText.current.fadeOut(3000);

                setTimeout(() => {
                  setModalText(
                    'We are here to motivate you and help you push through goals',
                  );

                  modalText.current.fadeIn(3000);

                  setTimeout(() => {
                    modalText.current.fadeOut(3000);

                    setModalText('Now, we need to know more about you...');

                    modalText.current.fadeIn(3000);

                    setTimeout(() => {
                      modalText.current.fadeOut(3000);

                      setModalText('When were you born?');

                      modalText.current.fadeIn(3000);

                      //  This is where the text boxes should appear

                      setShowInput(true);
                    }, 3500);
                  }, 3500);
                }, 3500);
              }}
              ref={modalText}>
              {modalTxt}
            </Animatable.Text>
            {showInput && (
              <Animatable.View animation="fadeIn">
                {showInput1 && (
                  <DatePicker
                    date={date}
                    mode="date"
                    onDateChange={(e) => setDateToAsync(e)}
                  />
                )}
                {showInput2 && (
                  <View style={{minHeight: 150}}>
                    <DropDownPicker
                      items={countries}
                      // defaultValue={countries[0].label}
                      containerStyle={{height: 50}}
                      style={{
                        backgroundColor: '#fafafa',
                        minWidth: 250,
                        paddingHorizontal: 10,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                      }}
                      dropDownStyle={{backgroundColor: '#fafafa'}}
                      onChangeItem={(item) => setCountry(item.value)}

                      // onClose={() => setShowButton(true)}
                    />

                    <Text
                      style={{
                        margin: 10,
                        marginTop: 20,
                        fontFamily: globalTheme.font.medium,
                      }}>
                      Your selected country is{' '}
                      {countries.map((cntry) =>
                        cntry.value === country ? (
                          <Text
                            style={{
                              color: globalTheme.colors.primary,
                            }}>
                            {cntry.label}
                          </Text>
                        ) : null,
                      )}
                    </Text>
                  </View>
                )}
                {showInput3 && (
                  <View>
                    <View style={styles.radioGroup}>
                      <RadioButton
                        color={globalTheme.colors.primary}
                        value="Male"
                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Male')}
                      />
                      <Text style={styles.radioText}>Male{'      '}</Text>
                    </View>
                    <View style={styles.radioGroup}>
                      <RadioButton
                        color={globalTheme.colors.primary}
                        value="Female"
                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Female')}
                      />
                      <Text style={styles.radioText}>Female </Text>
                    </View>
                  </View>
                )}
                <View style={{margin: 10}} />
                {showButton && (
                  <Button
                    mode="contained"
                    onPress={onPressNext}
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      marginHorizontal: 20,
                    }}>
                    Next
                  </Button>
                )}
              </Animatable.View>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.circleView2} />
      <View style={styles.circleView3} />
      <View style={styles.circleView1} />
    </View>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    marginTop: 60,
    backgroundColor: 'white',
    borderRadius: 20,

    alignItems: 'center',
    shadowColor: globalTheme.colors.primary,
    borderColor: globalTheme.colors.primary,
    borderWidth: 2,
    elevation: 5,
    minHeight: 300,
    minWidth: 300,
    width: 'auto',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  modalText: {
    textAlign: 'center',
    fontFamily: globalTheme.font.regular,
    fontSize: 24,
    margin: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  inputs: {
    width: 160,
  },

  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 80,
    paddingVertical: 10,
  },

  radioText: {
    margin: 6,
    fontFamily: globalTheme.font.regular,
    fontSize: 16,
  },
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25,
  },
  infoText: {
    textAlign: 'center',
  },
  titleText: {
    fontSize: 18,

    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  openingText: {
    textAlign: 'center',
  },

  circleView1: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: -40,
    left: -40,
    backgroundColor: globalTheme.colors.primary,
    borderRadius: 75,
    opacity: 0.4,
  },

  circleView2: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: -40,
    left: 40,
    backgroundColor: globalTheme.colors.primary,
    borderRadius: 75,
    opacity: 0.5,
  },

  circleView3: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 40,
    left: -40,
    backgroundColor: globalTheme.colors.primary,
    borderRadius: 75,
    opacity: 0.5,
  },
});
