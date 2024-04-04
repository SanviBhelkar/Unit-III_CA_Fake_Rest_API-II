import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemSection = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eaeaea',
  },
});

export default ItemSection;
