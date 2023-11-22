import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Map from '../components/Map';
import Button from '../components/Button';

const MapScreen = ({navigation}) => {
  const [marker, setMarker] = useState(null);

  return (
    <View style={styles.container}>
      <Map marker={marker} setMarker={setMarker} />
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        {marker && (
          <Button
            title="Create"
            onPress={() => {
              navigation.navigate('CreateLocation', {marker: marker});
              setMarker(null);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
