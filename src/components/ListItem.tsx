import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ListButton from './ListButton';

interface props {
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  id: string;
}

const ListItem = ({name, coordinate, id}: props) => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, darkMode && {backgroundColor: '#222'}]}>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.name, darkMode && {color: '#fff'}]}>{name}</Text>
        <Text style={[styles.coordinate, darkMode && {color: '#fff'}]}>
          Latitude: {coordinate?.latitude}
        </Text>
        <Text style={[styles.coordinate, darkMode && {color: '#fff'}]}>
          Longitude: {coordinate?.longitude}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ListButton
          type="edit"
          onPress={() =>
            navigation.navigate('EditLocation', {
              id: id,
              coordinate: coordinate,
              name: name,
            })
          }
        />
        <ListButton
          onPress={() => dispatch({type: 'REMOVE_MARKER', payload: id})}
        />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#d3d3d3',
    marginBottom: 5,
  },
  descriptionContainer: {},
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  coordinate: {
    fontWeight: '600',
    color: '#000',
  },
});
