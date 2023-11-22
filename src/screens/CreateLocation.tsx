import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';

import Input from '../components/Input';
import Button from '../components/Button';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
});

const CreateLocation = ({route, navigation}) => {
  const darkMode = useSelector(state => state.darkMode);
  const marker = route.params.marker;
  const dispatch = useDispatch();

  const addNewMarker = values => {
    if (values.name) {
      dispatch({type: 'ADD_MARKER', payload: {...marker, name: values.name}});
      navigation.goBack();
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: '',
        latitude: marker.coordinate.latitude,
        longtitude: marker.coordinate.longitude,
      }}
      onSubmit={addNewMarker}>
      {({handleChange, handleSubmit, errors}) => (
        <View style={[styles.container, darkMode && {backgroundColor: '#000'}]}>
          <Input
            placeholder="Name"
            onChangeText={handleChange('name')}
            error={errors.name}
          />
          <Input placeholder={marker.coordinate.latitude.toString()} />
          <Input placeholder={marker.coordinate.longitude.toString()} />
          <Button title="Create" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default CreateLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
