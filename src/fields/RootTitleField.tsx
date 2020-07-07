import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFormContext } from '../FormContext';


const RootTitleField = ({
                          title,
                          required,
                        }: {
  title?: string;
  required?: boolean;
}) => {
  const context = useFormContext();
  return (
    <Text style={ styles.title }>
      { title }
      { required && (
        <Text style={ styles.required }>{ context.requiredTitle }</Text>
      ) }
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  required: {
    color: '#F51A51',
  },
});

export default RootTitleField;
