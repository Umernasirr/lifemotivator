import {StyleSheet, Text, View} from 'react-native';
const Theme = {
  colors: {
    primary: '#7874C9',
    accent: '#F2E7F8',
    accent2: 'rgba(120, 116, 201,0.2)',
    dark: '#000000',
    white: 'rgba(255,255,255,0.6)',
    lightDark: '#C1B8C3',
    yellow: '#EFCE4A',
    gray: '#797979',
    grayish: '#707070',
    darkGray: '#616161',
    lightGray: '#C4C4C4',
    lightenGray: '#B1B1B1',
    success: '#4EC400',
    red: '#CF4343',
    blue: '#0084ff',
  },
  font: {
    black: 'Montserrat-Black',
    bold: 'Montserrat-Bold',
    light: 'Montserrat-Light',
    medium: 'Montserrat-Medium',
    regular: 'Montserrat-Regular',
    semiBold: 'Montserrat-SemiBold',
  },
};

export const globalStyles = StyleSheet.create({
  background: {
    display: 'flex',
    flex: 1,
    backgroundColor: Theme.colors.accent,
  },

  container: {
    alignContent: 'center',
    marginTop: 40,
    margin: 10,
  },

  content: {width: '90%', marginBottom: 20},

  linearGradient: {
    display: 'flex',
    flex: 1,
  },
});

export default Theme;
