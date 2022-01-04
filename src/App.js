import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Profile from './screens/Profile';
import {Image} from 'react-native';
import IntroSlider from './screens/IntroSlider';
import Camera from "./screens/Camera";

const Stack = createStackNavigator();

function App() {
  const mainTab = createBottomTabNavigator();
  function TabStackScreen() {
    return (
      <mainTab.Navigator
          tabBarOptions={{
              showLabel: false
          }}
      >
        <mainTab.Screen
          name="Home"
          component={Home}
          options={{
              showLabel: false,
              tabBarIcon: ({focused}) => (
              <Image
                style={{width: 20, height: 20, marginHorizontal: 10}}
                source={require('./logo/home.png')}
              />
            )
          }}
        />
        <mainTab.Screen
          name="Transaction"
          component={Camera}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{width: 60, height: 60, bottom: 15, position:'absolute'}}
                source={require('./logo/camera.png')}
              />
            )
          }}
        />
        <mainTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{width: 20, height: 20, marginHorizontal: 10}}
                source={require('./logo/parcel.png')}
              />
            )
          }}
        />
      </mainTab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="introSlider" component={IntroSlider} />
        <Stack.Screen name="home" component={TabStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
