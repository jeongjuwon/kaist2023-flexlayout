import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  title: string;
};

const Label: FC<Props> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    width: 100,
  },
});
export default Label;
