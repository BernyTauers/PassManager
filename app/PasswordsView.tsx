import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import PasswordItem from '../components/PasswordItem';

const PasswordsView = ({ navigation }: any) => {
  const passwords = [
    { id: '1', site: 'Google', username: 'user@gmail.com', password: '1234' },
    { id: '2', site: 'Facebook', username: 'user@fb.com', password: 'abcd' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passwords</Text>
      <FlatList
        data={passwords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PasswordItem site={item.site} username={item.username} password={item.password} />
        )}
      />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default PasswordsView;