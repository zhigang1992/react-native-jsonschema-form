import {withTheme} from 'react-jsonschema-form';
import React from 'react';
import {getDefaultRegistry} from 'react-jsonschema-form/lib/utils';
import {ScrollView, Text, View} from 'react-native';
import Theme from './form/Theme';

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $ref: '#/definitions/Root',
  definitions: {
    Root: {
      type: 'object',
      properties: {
        select: {
          type: 'string',
          enum: ['Option A', 'Option B', 'Option C'],
          description: 'This is a description',
          title: 'Title',
        },
        arary: {
          type: 'array',
          items: {
            type: 'string',
          },
          maxItems: 2,
        },
        multiselect: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['Option A', 'Option B', 'Option C'],
          },
          description: 'This is a multi select',
          title: 'MultiSelect',
          uniqueItems: true,
        },
      },
      required: ['select', 'arary', 'multiselect'],
      additionalProperties: false,
    },
  },
} as any;

const uiSchema = {
  multiselect: {
    'ui:widget': 'checkboxes',
  },
  array: {
    items: {
      'ui:widget': 'select',
    },
  },
  // hello: {
  //   'ui:widget': 'textarea',
  // },
  // worldRadio: {
  //   'ui:widget': 'radio',
  // },
  // password: {
  //   'ui:widget': 'password',
  // },
  // multipleChoicesList: {
  //   'ui:widget': 'checkboxes',
  // },
} as any;

const Form = withTheme(Theme);

const Test = (props: any) => (
  <View style={{paddingHorizontal: 20}}>{props.children}</View>
);

const FormPage = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{height: 100}} />
      <Form
        schema={schema}
        uiSchema={uiSchema}
        {...{tagName: Test}}
        onChange={c => console.log(c.formData)}>
        <Text>{JSON.stringify(Object.keys(getDefaultRegistry().widgets))}</Text>
      </Form>
    </ScrollView>
  );
};

export default FormPage;
