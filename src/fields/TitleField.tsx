import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFormContext } from '../FormContext';

const TitleField = ({
                      title,
                      required,
                      error,
                    }: {
  title?: string;
  required?: boolean;
  error?: boolean;
}) => {
  const { requiredTitle, theme } = useFormContext();
  return (
    <Text style={ [
        styles.title,
        { color: error ? theme.errorColor : theme.textColor },
      ] }
    >
      { title }
      {
        required && <Text style={ { color: theme.errorColor } }>{ requiredTitle }</Text>
      }
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
});

export default TitleField;
