import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalTheme, {globalStyles} from '../styles/';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Header = ({show = true, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {show && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={{}} name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: globalTheme.colors.primary,
    height: 60,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 14,
    padding: 10,
  },

  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: globalTheme.font.medium,
    color: 'white',
    fontSize: 24,
    marginLeft: 24,
  },
});
