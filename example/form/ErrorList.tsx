import React, {useContext, useMemo} from 'react';

import {ErrorListProps} from 'react-jsonschema-form';
import {StyleSheet, Text, View} from 'react-native';
import {FormContext} from './FormContext';

const ErrorList = ({errors}: ErrorListProps) => {
  const context = useContext(FormContext);
  useMemo(() => {
    context.ajvErrorMapping?.(errors);
  }, [errors, context.ajvErrorMapping]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Errors</Text>
      {errors.map((error, i: number) => {
        return (
          <Text style={styles.error} key={i}>
            {error.message}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fadee2',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    color: 'black',
  },
});

export default ErrorList;
