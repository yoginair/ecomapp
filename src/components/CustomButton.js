import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
const CustomButton = ({
  onPress,
  title
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}>
      <Text
        style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  buttonContainer: {
      alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
    width: '90%',
    height: 65,
  },
  text: {
    alignItems: 'center',
    fontWeight: 'normal',
    letterSpacing: 1.1,
    fontSize: 20,
    color: '#ffff',
  },
});
