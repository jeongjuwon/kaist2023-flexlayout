import React from 'react';
import {View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function FlexScreen() {
  return (
    <ScreenContainer title="FlexScreen">
      <LayoutContainer>
        <View style={{flex: 1, width: 50, backgroundColor: 'red'}} />
        <View style={{flex: 3, width: 50, backgroundColor: 'green'}} />
        <View style={{flex: 1, width: 50, backgroundColor: 'blue'}} />
      </LayoutContainer>
      <LayoutContainer>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
        <View style={{flex: 1, backgroundColor: 'blue'}} />
      </LayoutContainer>
      <LayoutContainer
        style={{
          alignItems: 'center',
        }}>
        <View style={{flex: 1, width: 50, backgroundColor: 'red'}} />
        <View style={{flex: 3, width: 50, backgroundColor: 'green'}} />
        <View style={{flex: 1, width: 50, backgroundColor: 'blue'}} />
      </LayoutContainer>
      <LayoutContainer
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
