import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const LayoutContainer: FC<Props> = ({children, style}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    margin: 5,
  },
});

export default LayoutContainer;
