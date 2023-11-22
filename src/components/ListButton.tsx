import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import EditIcon from '../assets/Icons/EditIcon';
import DeleteIcon from '../assets/Icons/DeleteIcon';

interface props {
  type?: string;
  onPress: () => void;
}

const ListButton = ({type, onPress}: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'edit' && {backgroundColor: 'green'}]}>
      {type === 'edit' ? <EditIcon /> : <DeleteIcon />}
    </TouchableOpacity>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: 'red',
    padding: 5,
    marginRight: 10,
  },
});
