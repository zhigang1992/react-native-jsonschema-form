import {ThemeProps, withTheme} from 'react-jsonschema-form';
import React from 'react';
import {getDefaultRegistry} from 'react-jsonschema-form/lib/utils';
import {Text, View} from 'react-native';
import FieldTemplate from './form/FieldTemplate';
import TextWidget from './form/TextWidget';
import TitleField from './form/TitleField';
import ObjectFieldTemplate from './form/ObjectFieldTemplate';
import TextareaWidget from './form/TextareaWidget';

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $ref: '#/definitions/Test',
  definitions: {
    Test: {
      title: 'WTF',
      type: 'object',
      properties: {
        hello: {
          type: 'string',
          description: 'This is a description',
          title: '牛',
        },
        world: {
          type: 'string',
          description: 'This is a description',
          title: 'Sup',
        },
      },
      required: ['hello'],
      additionalProperties: false,
    },
  },
} as any;

const uiSchema = {
  hello: {
    'ui:widget': 'textarea',
  },
} as any;

const Theme: ThemeProps = {
  widgets: {
    TextWidget,
    TextareaWidget,
  },
  fields: {
    TitleField,
  },
  FieldTemplate,
  ObjectFieldTemplate,
};

const Form = withTheme(Theme);

const Test = (props: any) => (
  <View style={{paddingHorizontal: 20}}>{props.children}</View>
);

const FormPage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        {...{tagName: Test}}
        onChange={c => console.log(c.formData)}>
        <Text>{JSON.stringify(Object.keys(getDefaultRegistry().widgets))}</Text>
      </Form>
    </View>
  );
};

export default FormPage;
