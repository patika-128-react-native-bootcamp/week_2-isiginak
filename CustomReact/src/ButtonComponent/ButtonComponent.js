import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
const ButtonComponent = ({filterIncrease, filterDecrease, filterDate}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        style={styles.buttonStyle}
        onPress={filterIncrease}
      />
      <Button
        title="Decrease"
        style={styles.buttonStyle}
        onPress={filterDecrease}
      />
      <Button title="Date" style={styles.buttonStyle} onPress={filterDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
});
export default ButtonComponent;
