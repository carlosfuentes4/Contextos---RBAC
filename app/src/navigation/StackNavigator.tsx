import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/Login';
import TabNavigator from './TabsNavigator'; // <-- Importamos el archivo de las pestañas por separado

// Definimos los tipos para el Stack principal
export type RootStackParamList = {
  Login: undefined;
  AppTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  const authContext = useContext(AuthContext);
  if (!authContext) return null;

  const { isAuthenticated } = authContext;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          // Si el estado global cambia a true, monta el flujo de pestañas de inmediato [cite: 23]
          <Stack.Screen name="AppTabs" component={TabNavigator} />
        ) : (
          // Si es false (por defecto o tras hacer Logout), lo mantiene bloqueado aquí [cite: 46]
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}