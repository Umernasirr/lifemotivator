import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalTheme, {globalStyles} from '../styles/';

const Quote = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Card style={{minHeight: 160, height: 160}}>
      <Card.Title title="Quote of the Day" left={LeftContent} />
      <Card.Content>
        {/* <Title>Card Title</Title> */}
        <Text style={styles.quote}>
          "Don't let yesterday take up too much of today".
        </Text>
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
    paddingHorizontal: 30,
    fontFamily: globalTheme.font.light,
    fontSize: 20,
  },
});
