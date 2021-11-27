import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
const ButtonComponent = ({filterIncrease, filterDecrease, filterDate}) => {
  return (
    <View style={styles.buttonStyle}>
      <Button title="Increase" onPress={filterIncrease} />
      <Button title="Decrease" onPress={filterDecrease} />
      <Button title="Date" onPress={filterDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default ButtonComponent;
