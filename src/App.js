import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Dashboard from './screens/Dashboard/Dashboard';
import Settings from './screens/Settings/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import globalTheme, {globalStyles} from './styles';
import Header from './components/Header';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7874C9',
    accent: '#F2E7F8',
  },

  roundness: 10,
};

const MainStack = createStackNavigator();

const BottomStack = createBottomTabNavigator();

const BottomStackScreen = () => (
  <BottomStack.Navigator
    initialRouteName="Dashboard"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <BottomStack.Screen name="Dashboard" component={Dashboard} />
    <BottomStack.Screen name="Settings" component={Settings} />
  </BottomStack.Navigator>
);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Life Motivator">
          <MainStack.Screen
            name="Splash"
            options={{headerShown: false}}
            component={Splash}
          />
          <MainStack.Screen
            options={{
              header: (props) => (
                <Header {...props} title="Login" show={false} />
              ),
            }}
            name="Login"
            component={Login}
          />
          <MainStack.Screen
            name="SignUp"
            options={{
              header: (props) => <Header {...props} title="SignUp" />,
            }}
            component={SignUp}
          />

          <MainStack.Screen
            options={{
              header: (props) => (
                <Header {...props} show={false} title="Life Motivator" />
              ),
            }}
            name="Life Motivator"
            component={BottomStackScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
