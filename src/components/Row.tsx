import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: ReactNode;
};

const Row: FC<Props> = ({children}) => {
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
export default Row;
