import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import {darkModeMap, lightModeMap} from '../assets/MapMode';

const EditScreen = ({route}) => {
  const {id, coordinate, name} = route.params;
  const [newCoordinate, setNewCoordinate] = useState(coordinate);
  const [newName, setNewName] = useState(name);
  const darkMode = useSelector(state => state.darkMode);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleMapPress = event => {
    setNewCoordinate(event.nativeEvent.coordinate);
  };

  const onSubmit = () => {
    dispatch({
      type: 'EDIT_MARKER',
      payload: {id: id, coordinate: newCoordinate, name: newName},
    });
    navigation.goBack();
  };

  return (
    <View style={[styles.container, darkMode && {backgroundColor: '#000'}]}>
      <View style={{flex: 1}}>
        <MapView
          onPress={handleMapPress}
          customMapStyle={darkMode ? darkModeMap : lightModeMap}
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          <Marker key={id} coordinate={newCoordinate} title={newName} />
        </MapView>
      </View>
      <View style={{flex: 2}}>
        <Input placeholder={name} onChangeText={setNewName} />
        <Input placeholder={newCoordinate.latitude.toString()} />
        <Input placeholder={newCoordinate.longitude.toString()} />
        <Button title="Edit" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
