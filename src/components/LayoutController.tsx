import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import Label from './Label';
import Row from './Row';

type Props = {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  setFlexDirection: (flexDirection: string) => void;
  setJustifyContent: (justifyContent: string) => void;
  setAlignItems: (alignItems: string) => void;
};

const LayoutController: FC<Props> = ({
  flexDirection,
  justifyContent,
  alignItems,
  setFlexDirection,
  setJustifyContent,
  setAlignItems,
}) => {
  return (
    <View style={styles.container}>
      <Row>
        <Label title="flexDirection" />
        <Button
          title="column"
          value={flexDirection}
          onPress={() => {
            setFlexDirection('column');
          }}
        />
        <Button
          title="row"
          value={flexDirection}
          onPress={() => {
            setFlexDirection('row');
          }}
        />
      </Row>
      <Row>
        <Label title="justifyContent" />
        <Button
          title="flex-start"
          value={justifyContent}
          onPress={() => setJustifyContent('flex-start')}
        />
        <Button
          title="center"
          value={justifyContent}
          onPress={() => setJustifyContent('center')}
        />
        <Button
          title="flex-end"
          value={justifyContent}
          onPress={() => setJustifyContent('flex-end')}
        />
        <Button
          title="space-between"
          value={justifyContent}
          onPress={() => setJustifyContent('space-between')}
        />
        <Button
          title="space-around"
          value={justifyContent}
          onPress={() => setJustifyContent('space-around')}
        />
      </Row>
      <Row>
        <Label title="alignItems" />
        <Button
          title="flex-start"
          value={alignItems}
          onPress={() => setAlignItems('flex-start')}
        />
        <Button
          title="center"
          value={alignItems}
          onPress={() => setAlignItems('center')}
        />
        <Button
          title="flex-end"
          value={alignItems}
          onPress={() => setAlignItems('flex-end')}
        />
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    margin: 10,
  },
});
export default LayoutController;
