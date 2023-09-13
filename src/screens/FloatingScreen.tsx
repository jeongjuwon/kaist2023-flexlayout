import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default function FloatingScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
        FloatingScreen
      </Text>
      <View style={{flex: 1, borderWidth: 5, margin: 5}}>
        <View
          style={{
            position: 'absolute',
            left: 20,
            top: 20,
            bottom: 20,
            right: 20,
            zIndex: 1,
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    </SafeAreaView>
  );
}
