import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  value: string;
};

const Button: FC<Props> = ({title, onPress, value}) => {
  return (
    <TouchableOpacity
      style={[styles.button, value === title && styles.selected]}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  selected: {
    backgroundColor: 'gray',
  },
});
export default Button;
