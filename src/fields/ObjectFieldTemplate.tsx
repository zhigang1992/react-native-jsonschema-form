import React from 'react';
import { View } from 'react-native';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import DescriptionField from './DescriptionField';
import RootTitleField from './RootTitleField';

const ObjectFieldTemplate = ({
                               description,
                               title,
                               properties,
                               required,
                               uiSchema,
                             }: ObjectFieldTemplateProps) => {
  return (
    <View>
      {
        (uiSchema[ 'ui:title' ] || title) ? <RootTitleField title={ title } required={ required }/> : null
      }
      {
        description ? <DescriptionField description={ description }/> : null
      }
      {
        properties.map((element: any, index: number) => (
          <View key={ index }>
            { element.content }
          </View>
        ))
      }
    </View>
  );
};

export default ObjectFieldTemplate;
