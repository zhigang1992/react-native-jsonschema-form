import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFormContext } from '../FormContext';

const TitleField = ({
                      title,
                      required,
                    }: {
  title?: string;
  required?: boolean;
}) => {
  const { requiredTitle, theme } = useFormContext();
  return (
    <Text style={ [
        styles.title,
        { color: theme.textColor },
      ] }
    >
      { title }
      {
        required && <Text style={ { color: theme.requiredColor } }>{ requiredTitle }</Text>
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
    fontFamily: 'Roboto',
  },
});

export default TitleField;
