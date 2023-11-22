import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Input from '../components/Input';
import Button from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is a required field'),
  lastName: yup.string().required('Last name is a required field'),
});

const LoginScreen: React.FC = () => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const handleLogin = values => {
    if (values.firstName && values.lastName) {
      dispatch({
        type: 'LOGIN',
        payload: {firtsName: values.firstName, lastName: values.lastName},
      });
    }
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{firstName: '', lastName: ''}}
      onSubmit={handleLogin}>
      {({handleChange, handleSubmit, errors}) => (
        <SafeAreaView
          style={[styles.container, darkMode && {backgroundColor: '#000'}]}>
          <Input
            placeholder="First Name"
            onChangeText={handleChange('firstName')}
            error={errors.firstName}
          />
          <Input
            placeholder="Last Name"
            onChangeText={handleChange('lastName')}
            error={errors.lastName}
          />
          <Button title="Login" onPress={handleSubmit} />
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default LoginScreen;
