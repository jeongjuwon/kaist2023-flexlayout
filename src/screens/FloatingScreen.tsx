import React from 'react';
import {View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function FloatingScreen() {
  return (
    <ScreenContainer title="FloatingScreen">
      <LayoutContainer>
        <View
          style={{
            position: 'relative',
            top: 20,
            left: 20,
            // right: 20,
            // bottom: 20,
            zIndex: 1,
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </LayoutContainer>
      <LayoutContainer>
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            // right: 20,
            // bottom: 20,
            zIndex: 1,
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </LayoutContainer>
      <LayoutContainer>
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            zIndex: 1,
            backgroundColor: 'powderblue',
          }}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
