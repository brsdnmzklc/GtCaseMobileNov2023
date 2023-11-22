import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ListItem from '../components/ListItem';

const ListScreen = () => {
  const markers = useSelector(state => state.markers);
  const darkMode = useSelector(state => state.darkMode);
  return (
    <View style={[styles.container, darkMode && {backgroundColor: '#000'}]}>
      <FlatList
        data={markers}
        renderItem={({item}) => (
          <ListItem
            name={item?.name}
            coordinate={item?.coordinate}
            id={item?.id}
          />
        )}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 5,
  },
});
