import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import Row from './Row';

type Props = {
  title: string;
  children: ReactNode;
};

const ScreenContainer: FC<Props> = ({title, children}) => {
  const navigation = useNavigation();

  const onPress = () => {
    // @ts-ignore
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Row>
        <Pressable style={{width: 100}} onPress={onPress}>
          <Text>menu</Text>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </Row>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    marginRight: 100,
  },
});

export default ScreenContainer;
