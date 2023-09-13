import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import AlignSelfScreen from './src/screens/AlignSelfScreen';
import DefaultChildWidthScreen from './src/screens/DefaultChildWidthScreen';
import DynamicScreen from './src/screens/DynamicScreen';
import FlexScreen from './src/screens/FlexScreen';
import FloatingScreen from './src/screens/FloatingScreen';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="FloatingScreen" component={FloatingScreen} />
        <Drawer.Screen name="FlexScreen" component={FlexScreen} />
        <Drawer.Screen name="AlignSelfScreen" component={AlignSelfScreen} />
        <Drawer.Screen
          name="DefaultChildWidthScreen"
          component={DefaultChildWidthScreen}
        />
        <Drawer.Screen name="DynamicScreen" component={DynamicScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
