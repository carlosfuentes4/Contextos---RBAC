import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function SettingsScreen() {
  const authContext = useContext(AuthContext);

  if (!authContext) return null;
  const { logout } = authContext;

  return (
    <View style={styles.container}>
      {/* Texto obligatorio exigido por la rúbrica */}
      <Text style={styles.text}>estas en Settings</Text>
      
      <TouchableOpacity style={styles.btnLogout} onPress={logout}>
        <Text style={styles.btnText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  btnLogout: { backgroundColor: '#dc3545', padding: 12, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: 'bold' }
});
