import {ThemeProps, withTheme} from 'react-jsonschema-form';
import React from 'react';
import {getDefaultRegistry} from 'react-jsonschema-form/lib/utils';
import {ScrollView, Text, View} from 'react-native';
import FieldTemplate from './form/FieldTemplate';
import TextWidget from './form/TextWidget';
import TitleField from './form/TitleField';
import ObjectFieldTemplate from './form/ObjectFieldTemplate';
import TextareaWidget from './form/TextareaWidget';
import CheckboxWidget from './form/CheckboxWidget';
import CheckboxesWidget from './form/CheckboxesWidget';
import PasswordWidget from './form/PasswordWidget';
import RadioWidget from './form/RadioWidget';
import RangeWidget from './form/RangeWidget';

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $ref: '#/definitions/Test',
  definitions: {
    Test: {
      type: 'object',
      properties: {
        hello: {
          type: 'string',
          enum: ['hello', 'world', 'sup'],
          enumNames: ['asdfadf', 'adsfa', 'adsfasdfasdf'],
        },
        world: {
          type: 'number',
        },
      },
      required: ['hello'],
      additionalProperties: false,
    },
  },
} as any;

const uiSchema = {
  world: {
    'ui:widget': 'range',
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

const Theme: ThemeProps = {
  widgets: {
    TextWidget,
    TextareaWidget,
    CheckboxWidget,
    CheckboxesWidget,
    PasswordWidget,
    RadioWidget,
    SelectWidget: RadioWidget,
    RangeWidget,
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
