import React from 'react';

import {ObjectFieldTemplateProps} from 'react-jsonschema-form';
import {StyleSheet, View} from 'react-native';

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {
  return (
    <>
      {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      {properties.map((element: any, index: number) => (
        <View key={index} style={styles.element}>
          {element.content}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  element: {
    marginBottom: 10,
  },
});

export default ObjectFieldTemplate;
