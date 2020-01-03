import React, {useRef} from 'react';
import {Alert, Button, ScrollView, View} from 'react-native';
import ReactNativeForm, {defaultProps, FormContext} from 'rjsf-native';
import schema from './schema.json';

const uiSchema = {
  toggle: {
    'ui:widget': 'radio',
  },
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
};

const FormPage = () => {
  const form = useRef<any>(null);
  return (
    <FormContext.Provider
      value={{
        ...defaultProps,
        // requiredTitle: '(必填)',
        // arrayAddTitle: '添加',
        // radioLabelMapping(input) {
        //   if (input.toLowerCase() === 'yes') {
        //     return '是';
        //   } else if (input.toLowerCase() === 'no') {
        //     return '否';
        //   } else {
        //     return input;
        //   }
        // },
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
