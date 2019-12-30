import React, {useRef} from 'react';
import {Alert, Button, ScrollView, View} from 'react-native';
import {defaultProps, FormContext} from './form/FormContext';
import ReactNativeForm from './form/ReactNativeForm';

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $ref: '#/definitions/Root',
  definitions: {
    Root: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: 'Text component description',
          title: 'Text Input',
        },
        description: {
          type: 'string',
          description: 'Text area description',
          title: 'Text Area',
        },
        password: {
          type: 'string',
          description: 'Password description',
          title: 'Password',
        },
        percentage: {
          type: 'number',
          description: 'A number with slider',
          title: 'Slider',
        },
        select: {
          type: 'string',
          enum: ['Option A', 'Option B', 'Option C'],
          description: 'This is a description',
          title: 'Title',
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
        array: {
          type: 'array',
          items: {
            type: 'string',
          },
          minItems: 1,
          maxItems: 4,
        },
      },
      required: [
        'title',
        'description',
        'password',
        'percentage',
        'select',
        'multiselect',
        'array',
      ],
      additionalProperties: false,
    },
  },
} as any;

const uiSchema = {
  description: {
    'ui:widget': 'textarea',
  },
  password: {
    'ui:widget': 'password',
  },
  percentage: {
    'ui:widget': 'range',
  },
  multiselect: {
    'ui:widget': 'checkboxes',
  },
} as any;

const FormPage = () => {
  const form = useRef<any>(null);
  return (
    <FormContext.Provider
      value={{
        ...defaultProps,
        requiredTitle: '(必填)',
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{height: 100}} />
        <ReactNativeForm
          ref={form}
          onError={e => {
            console.log(e);
            Alert.alert('Please check your form');
          }}
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={form => console.log(form.formData)}>
          <Button
            title="Submit"
            onPress={() => {
              form.current?.submit();
            }}
          />
        </ReactNativeForm>
        <View style={{height: 100}} />
      </ScrollView>
    </FormContext.Provider>
  );
};

export default FormPage;
