import React, {useContext} from 'react';

import {FieldProps} from 'react-jsonschema-form';
import {StyleSheet, Text} from 'react-native';
import {FormContext} from './FormContext';

const TitleField = ({title, required}: FieldProps) => {
  const context = useContext(FormContext);
  return (
    <Text style={styles.title}>
      {title}
      {required && (
        <Text style={styles.required}> {context.requiredTitle}</Text>
      )}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    lineHeight: 22,
  },
  required: {
    color: '#F51A51',
  },
});

export default TitleField;
