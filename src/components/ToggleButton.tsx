import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DarkModeIcon from '../assets/Icons/DarkModeIcon';
import LightModeIcon from '../assets/Icons/LightModeIcon';

const ToggleButton = () => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({type: 'TOGGLE_DARK_MODE'})}>
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </TouchableOpacity>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});
