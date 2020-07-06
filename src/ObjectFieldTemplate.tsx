import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import DescriptionField from './DescriptionField';
import TitleField from './TitleField';

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  required,
  uiSchema,
}: ObjectFieldTemplateProps) => {
  return (
    <View style={styles.container}>
      {(uiSchema['ui:title'] || title) && (
        <TitleField title={title} required={required} />
      )}
      {description && <DescriptionField description={description} />}
      {properties.map((element: any, index: number) => (
        <View key={index} style={styles.element}>
          {element.content}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 5,
  },
  element: {
    marginBottom: 10,
  },
});

export default ObjectFieldTemplate;
