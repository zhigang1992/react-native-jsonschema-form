import React from 'react';

import {FieldProps} from 'react-jsonschema-form';
import {StyleSheet, Text} from 'react-native';

const DescriptionField = ({description}: FieldProps) => {
  if (description) {
    return <Text style={styles.description}>{description}</Text>;
  }
  return null;
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: '#999999',
  },
});

export default DescriptionField;
