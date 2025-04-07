import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsView = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Go to Passwords" onPress={() => navigation.navigate('Passwords')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default SettingsView;