import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

interface props {
  placeholder: string;
  onChangeText: any;
  error?: string;
  secureTextEntry?: boolean;
  value?: any;
}

const Input = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  error,
  value,
}: props) => {
  const darkMode = useSelector(state => state.darkMode);

  return (
    <View style={styles.container}>
      <TextInput
        value={value && value}
        placeholder={placeholder}
        style={[
          styles.input,
          darkMode && {backgroundColor: '#444', color: '#fff'},
        ]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={darkMode ? '#fff' : '#333'}
      />
      {error && (
        <Text style={[styles.errorText, darkMode && {color: '#777'}]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  input: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: '#ED240C',
  },
});

export default Input;
