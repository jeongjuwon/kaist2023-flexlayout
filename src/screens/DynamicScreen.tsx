import React, {useState} from 'react';
import {View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import LayoutController from '../components/LayoutController';
import ScreenContainer from '../components/ScreenContainer';

export default function DynamicScreen() {
  // es6
  const [flexDirection, setFlexDirection] = useState('column');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  // es5
  // const state = useState('column');
  // const flexDirection = state[0];
  // const setFlexDirection = state[1];

  return (
    <ScreenContainer title="DynamicScreen">
      <LayoutContainer
        style={{
          // es6
          // @ts-ignore
          flexDirection,
          // @ts-ignore
          justifyContent,
          // @ts-ignore
          alignItems,
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      </LayoutContainer>
      <LayoutController
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        setFlexDirection={setFlexDirection}
        setJustifyContent={setJustifyContent}
        setAlignItems={setAlignItems}
      />
    </ScreenContainer>
  );
}
