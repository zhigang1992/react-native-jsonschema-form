import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFormContext } from '../FormContext';

const DescriptionField = ({ description }: { description?: string }) => {
  const { theme } = useFormContext();
  if (description) {
    return (
      <Text style={ [ styles.description, {
        color: theme.textColor,
      } ] }
      >
        { description }
      </Text>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 10,
    fontSize: 14,
    color: '#333333',
  },
});

export default DescriptionField;
