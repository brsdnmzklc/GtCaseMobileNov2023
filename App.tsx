import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/context/store';

import LoginScreen from './src/screens/LoginScreen';
import ToggleButton from './src/components/ToggleButton';
import MapScreen from './src/screens/MapScreen';
import ListScreen from './src/screens/ListScreen';
import DrawerComponent from './src/components/DrawerComponent';
import CreateLocation from './src/screens/CreateLocation';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapStack" component={MapScreen} />
      <Stack.Screen name="CreateLocation" component={CreateLocation} />
    </Stack.Navigator>
  );
};
const ListStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListStack" component={ListScreen} />
      <Stack.Screen name="EditLocation" component={EditScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const darkMode = useSelector(state => state.darkMode);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: darkMode ? '#5555' : '#d3d3d3',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkMode ? '#000' : '#fff',
        },
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          color: darkMode ? '#fff' : '#000',
          fontSize: 16,
          marginBottom: 10,
        },
      }}>
      <Tab.Screen name="Map" component={MapStack} />
      <Tab.Screen name="List" component={ListStack} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ED240C',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerRight: () => <ToggleButton />,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={props => <DrawerComponent props={props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ED240C',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            drawerItemStyle: {
              backgroundColor: '#d3d3d3',
            },
            drawerLabelStyle: {
              color: '#000',
              textAlign: 'center',
            },

            headerRight: () => <ToggleButton />,
          }}>
          <Drawer.Screen name="Home" component={TabNavigator} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
