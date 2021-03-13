import React, {useState, useRef} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import globalTheme, {globalStyles} from '../../styles';

import * as Animatable from 'react-native-animatable';
import {Button, Text, TextInput, RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';

const MyModal = ({modalVisible, setModalVisible, setFirstTime, firstTime}) => {
  const [showInput, setShowInput] = useState(false);
  const modalText = useRef();
  const [modalTxt, setModalText] = useState('Welcome to Life Motivator!');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('uk');
  const [gender, setGender] = useState('');
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);

  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);

  const onPressNext = () => {
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

        setShowInput3(false);
        console.log(age, country, gender);

        // Calculate Life Estimate and Show

        // setModalText('Thank you! Now our system will estimate your life span. ');

        // Close Modal
        setTimeout(() => {
          setFirstTime(false);
        }, 3000);

        break;
    }
    setCount(count + 1);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Animatable.Text
              style={styles.modalText}
              animation="fadeIn"
              iterationCount={1}
              duration={1000}
              onAnimationEnd={function () {
                modalText.current.fadeOut(1000);

                setTimeout(() => {
                  setModalText(
                    'We are here to motivate you and help you push through goals',
                  );

                  modalText.current.fadeIn(1000);

                  setTimeout(() => {
                    modalText.current.fadeOut(1000);

                    setModalText('Now, we need to know more about you...');

                    modalText.current.fadeIn(1000);

                    setTimeout(() => {
                      modalText.current.fadeOut(1000);

                      setModalText('What is your Age?');

                      modalText.current.fadeIn(1000);

                      //  This is where the text boxes should appear

                      setShowInput(true);
                    }, 1500);
                  }, 1500);
                }, 1500);
              }}
              ref={modalText}>
              {modalTxt}
            </Animatable.Text>
            {showInput && (
              <Animatable.View animation="fadeIn">
                {showInput1 && (
                  <TextInput
                    label="Age"
                    keyboardType="number-pad"
                    mode="outlined"
                    onChangeText={(text) => setAge(text)}
                    style={styles.inputs}
                  />
                )}
                {showInput2 && (
                  <DropDownPicker
                    items={[
                      {
                        label: 'USA',
                        value: 'usa',
                        icon: () => (
                          <Icon
                            name="flag"
                            size={18}
                            color={globalTheme.colors.primary}
                          />
                        ),
                        hidden: true,
                      },
                      {
                        label: 'UK',
                        value: 'uk',
                        icon: () => (
                          <Icon
                            name="flag"
                            size={18}
                            color={globalTheme.colors.primary}
                          />
                        ),
                      },
                      {
                        label: 'France',
                        value: 'france',
                        icon: () => (
                          <Icon
                            name="flag"
                            size={18}
                            color={globalTheme.colors.primary}
                          />
                        ),
                      },
                    ]}
                    defaultValue={country}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                      justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={(item) => setCountry(item.value)}
                    onOpen={() => setShowButton(false)}
                    onClose={() => setShowButton(true)}
                  />
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

                    <View style={styles.radioGroup}>
                      <RadioButton
                        color={globalTheme.colors.primary}
                        value="Other"
                        status={gender === 'Other' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Other')}
                      />
                      <Text style={styles.radioText}>Other{'    '}</Text>
                    </View>
                  </View>
                )}

                {showButton && (
                  <Button
                    mode="contained"
                    onPress={onPressNext}
                    style={{marginTop: 20, paddingHorizontal: 10}}>
                    Next
                  </Button>
                )}
              </Animatable.View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,

    alignItems: 'center',
    shadowColor: globalTheme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minHeight: 300,
    minWidth: 300,
    width: 'auto',
    justifyContent: 'center',
    margin: 20,
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

  radioGroup: {flexDirection: 'row', justifyContent: 'center', margin: 5},

  radioText: {
    margin: 6,
    fontFamily: globalTheme.font.regular,
    fontSize: 16,
  },
});
