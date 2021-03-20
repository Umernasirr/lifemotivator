import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNotificationiOS = (title, message) => {
  PushNotificationIOS.addNotificationRequest({
    alertTitle: title,
    alertBody: message,
    channelId: 'test',
  });
};

export {showNotificationiOS};
