import React from 'react';

import { ErrorListProps } from '@rjsf/core';
import { StyleSheet, Text, View } from 'react-native';

const ErrorList = ({ errors }: ErrorListProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>Errors</Text>
    {errors.map((error, i: number) => {
      return (
        <Text style={styles.error} key={i}>
          {error.stack}
        </Text>
      );
    })}
  </View>
);

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
