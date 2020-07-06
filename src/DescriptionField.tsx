import React from 'react';
import { StyleSheet, Text } from 'react-native';

const DescriptionField = ({ description }: { description?: string }) => {
  if (description) {
    return <Text style={styles.description}>{description}</Text>;
  }
  return null;
};

const styles = StyleSheet.create({
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#999999',
  },
});

export default DescriptionField;
