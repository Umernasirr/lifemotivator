import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Dashboard from './screens/Dashboard/Dashboard';
import Settings from './screens/Settings/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen name="Splash" component={Splash} />
          <MainStack.Screen name="Login" component={Login} />
          <MainStack.Screen name="SignUp" component={SignUp} />

          <MainStack.Screen name="BottomStack" component={BottomStackScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
