import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import Button from './Button';

const DrawerComponent = ({props}) => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

  return (
    <View style={{flex: 1, backgroundColor: darkMode ? '#000' : '#fff'}}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.container, darkMode && {backgroundColor: '#000'}]}>
          <Text style={[styles.mainText, darkMode && {color: '#fff'}]}>
            Global Tours & Tickets
          </Text>
          <Text style={[styles.secondaryText, darkMode && {color: '#fff'}]}>
            Case Mobile November 2023
          </Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  secondaryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
});
