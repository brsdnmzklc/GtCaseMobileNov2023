import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface props {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED240C',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
