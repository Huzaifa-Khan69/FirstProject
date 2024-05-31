import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProduct from '../screen/MyProduct';
import MyCart from '../screen/MyCart';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyProduct" screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyProducts" component={MyProduct} />
        <Stack.Screen name="Cart" component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
