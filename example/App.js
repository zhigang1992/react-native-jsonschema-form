import React, { useRef } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import ReactNativeForm, { defaultProps, FormContext } from 'rjsf-native';

const schema = {
  type: 'object',
  title: 'Number fields & widgets',
  properties: {
    number: {
      title: 'Number',
      type: 'number',
    },
    integer: {
      title: 'Integer',
      type: 'integer',
    },
    numberEnum: {
      type: 'number',
      title: 'Number enum',
      enum: [ 1, 2, 3 ],
    },
    numberEnumRadio: {
      type: 'number',
      title: 'Number enum',
      enum: [ 1, 2, 3 ],
    },
    integerRange: {
      title: 'Integer range',
      type: 'integer',
      minimum: 42,
      maximum: 100,
    },
    integerRangeSteps: {
      title: 'Integer range (by 10)',
      type: 'integer',
      minimum: 50,
      maximum: 100,
      multipleOf: 10,
    },
  },
};

const uiSchema = {
  numberEnumRadio: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
    },
  },
  integerRange: {
    'ui:widget': 'range',
  },
  integerRangeSteps: {
    'ui:widget': 'range',
  },
};

export default () => {
  const form = useRef(null);
  const ref = useRef();
  return (
    <FormContext.Provider
      value={ {
        ...defaultProps,
      } }>
      <ScrollView style={ styles.container }>
        <ReactNativeForm
          ref={ form }
          onError={ (e) => {
            console.log(e);
          } }
          schema={ schema }
          uiSchema={ uiSchema }
          onSubmit={ (f) => console.log(f.formData) }>
          <Button
            title="Submit"
            onPress={ () => {
              if (form.current) {
                form.current.submit();
              }
            } }
          />
        </ReactNativeForm>
        <View style={ styles.spacer }/>
      </ScrollView>
    </FormContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: 100,
  },
});
