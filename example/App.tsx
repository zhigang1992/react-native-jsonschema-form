import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, ScrollView, View, Text} from 'react-native';
import ReactNativeForm, {defaultProps, FormContext} from 'rjsf-native';

const FormPage = () => {
  const [values, setValues] = useState<any>();
  const form = useRef<any>(null);
  useEffect(() => {
    fetch(
      'https://zen.reily.app/api/values/a7df9e43-4124-4f29-87d9-383b46cbcebb',
    )
      .then(r => r.json())
      .then(setValues);
  }, []);
  if (values == null) {
    return null;
  }
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
          schema={JSON.parse(values.schema)}
          uiSchema={JSON.parse(values.formSettings)}
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
