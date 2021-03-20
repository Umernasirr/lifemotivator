import PushNotification from 'react-native-push-notification';

const showNotificationAndroid = (title, message) => {
  console.log(title, message);
  PushNotification.localNotification({
    title,
    message,
    channelId: 'test',
  });
};

export {showNotificationAndroid};
