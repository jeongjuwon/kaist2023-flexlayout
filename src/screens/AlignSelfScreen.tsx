import React from 'react';
import {View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function AlignSelfScreen() {
  return (
    <ScreenContainer title="AlignSelfScreen">
      <LayoutContainer
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            alignSelf: 'flex-start',
          }}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'blue',
            alignSelf: 'flex-end',
          }}
        />
      </LayoutContainer>
      <LayoutContainer
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            alignSelf: 'flex-start',
          }}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'blue',
            alignSelf: 'flex-end',
          }}
        />
      </LayoutContainer>
    </ScreenContainer>
  );
}
