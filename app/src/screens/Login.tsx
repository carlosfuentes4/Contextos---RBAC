import React, { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/AuthContext"; // <-- Te faltaba importar el contexto global

export default function LoginScreen() {
  // 1. Estado local para saber cuál rol está seleccionado antes de presionar "Ingresar"
  const [selectedRole, setSelectedRole] = useState<'admin' | 'common'>('common');

  // 2. Consumimos la función login del estado global
  const authContext = useContext(AuthContext);

  // Validación de seguridad para TypeScript
  if (!authContext) {
    return null;
  }
  
  const { login } = authContext;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elija el usuario</Text>
      
      
      <Text style={styles.subtitle}>
        Seleccionado: <Text style={styles.roleText}>{selectedRole.toUpperCase()}</Text>
      </Text>

      
      <CustomButton
        title={"Admin"}
        onpress={() => setSelectedRole('admin')} // Cambia el estado local a admin
      />

      <View style={{ height: 10 }} /> {/* Espaciador básico */}

      
      <CustomButton
        title={"Common"}
        onpress={() => setSelectedRole('common')} // Cambia el estado local a common
      />

      <View style={styles.divider} />

     
      <CustomButton
        title={"INGRESAR"}
        onpress={() => login(selectedRole)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    color: "#666",
  },
  roleText: {
    fontWeight: "bold",
    color: "#007bff",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
});