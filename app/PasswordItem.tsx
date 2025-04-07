import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PasswordItemProps {
  site: string;
  username: string;
  password: string;
}

const PasswordItem: React.FC<PasswordItemProps> = ({ site, username, password }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.site}>{site}</Text>
      <Text style={styles.details}>Username: {username}</Text>
      <Text style={styles.details}>Password: {password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  site: { fontSize: 18, fontWeight: 'bold' },
  details: { fontSize: 14, color: '#555' },
});

export default PasswordItem;