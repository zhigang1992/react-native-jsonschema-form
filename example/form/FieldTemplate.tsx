import {FieldTemplateProps} from 'react-jsonschema-form';
import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FormContext} from './FormContext';

const FieldTemplate = ({
  label,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  required,
  rawDescription,
}: FieldTemplateProps) => {
  const context = useContext(FormContext);
  return (
    <View style={[styles.container, rawErrors.length > 0 && styles.formError]}>
      {displayLabel && label ? (
        <Text style={styles.label}>
          {label}
          {required && (
            <Text style={styles.required}> {context.requiredTitle}</Text>
          )}
        </Text>
      ) : null}
      {displayLabel && rawDescription ? (
        <Text style={styles.description}>{rawDescription}</Text>
      ) : null}
      {children}
      {rawErrors.length > 0 && (
        <>
          {rawErrors.map((error, i: number) => (
            <Text style={[styles.description, styles.error]} key={i}>
              - {error}
            </Text>
          ))}
        </>
      )}
      {rawHelp && <Text style={styles.description}>{rawHelp}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  formError: {
    backgroundColor: 'red',
  },
  error: {
    color: 'red',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    lineHeight: 22,
  },
  description: {
    fontSize: 14,
    color: '#999999',
  },
  required: {
    color: '#F51A51',
  },
});

export default FieldTemplate;
