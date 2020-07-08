import React from 'react';
import { FieldTemplateProps } from '@rjsf/core';
import { StyleSheet, Text, View } from 'react-native';
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
      style={ [
        styles.container,
        rawErrors.length > 0 && styles.formError,
      ] }
    >
      {
        (displayLabel && label) ? <TitleField title={ label } required={ required }/> : null
      }
      {
        (displayLabel && rawDescription) ? <DescriptionField description={ rawDescription }/> : null
      }
      { children }
      { rawErrors.length > 0 && (
        <>
          { rawErrors.map((error, i: number) => (
            <Text style={ [ styles.description, styles.error ] } key={ i }>
              - { error }
            </Text>
          )) }
        </>
      ) }
      { rawHelp?.length > 0 && <Text style={ styles.description }>{ rawHelp }</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  formError: {
    backgroundColor: '#fadee2',
  },
  error: {
    marginTop: 5,
    color: 'red',
  },
  description: {
    fontSize: 14,
    color: '#999999',
  },
});

export default FieldTemplate;
