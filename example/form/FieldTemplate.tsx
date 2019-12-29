import {FieldTemplateProps} from 'react-jsonschema-form';
import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FormContext} from './FormContext';
import TitleField from './TitleField';
import DescriptionField from './DescriptionField';

const FieldTemplate = ({
  label,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  required,
  rawDescription,
}: FieldTemplateProps) => {
  return (
    <View
      style={[
        displayLabel && styles.container,
        rawErrors.length > 0 && styles.formError,
      ]}>
      {displayLabel && label ? (
        <TitleField title={label} required={required} />
      ) : null}
      {displayLabel && rawDescription ? (
        <DescriptionField description={rawDescription} />
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
  container: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.12)',
  },
  formError: {
    backgroundColor: 'red',
  },
  error: {
    color: 'red',
  },
  description: {
    fontSize: 14,
    color: '#999999',
  },
});

export default FieldTemplate;
