import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalTheme, {globalStyles} from '../styles/';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Quote = ({text}) => {
  const LeftContent = (props) => (
    <MaterialIcons
      name="format-quote"
      size={26}
      color={globalTheme.colors.primary}
    />
  );

  return (
    <Card style={{minHeight: 160, height: 160}}>
      <Card.Title title="Quote of the Day" left={LeftContent} />
      <Card.Content>
        {/* <Title>Card Title</Title> */}
        <Text style={styles.quote}>"{text}"</Text>
      </Card.Content>
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  );
};

export default Quote;

const styles = StyleSheet.create({
  quote: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    fontFamily: globalTheme.font.regular,
    fontSize: 16,
  },
});
