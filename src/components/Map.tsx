import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {darkModeMap, lightModeMap} from '../assets/MapMode';

const Map = ({marker, setMarker}) => {
  const darkMode = useSelector(state => state.darkMode);
  const markers = useSelector(state => state.markers);

  const handleMapPress = event => {
    const newMarker = {
      name: '',
      id: markers.length + 1,
      coordinate: event.nativeEvent.coordinate,
    };

    setMarker(newMarker);
  };

  return (
    <MapView
      onPress={handleMapPress}
      style={styles.map}
      customMapStyle={darkMode ? darkModeMap : lightModeMap}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}>
      {marker && (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.name}
        />
      )}
      {markers &&
        markers.map(marker => (
          <Marker
            pinColor="blue"
            key={marker?.id}
            coordinate={marker?.coordinate}
            title={marker?.name}
          />
        ))}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
