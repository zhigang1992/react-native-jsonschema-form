import React from 'react';

import { WidgetProps } from '@rjsf/core';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DescriptionField from '../fields/DescriptionField';
import TitleField from '../fields/TitleField';
import { useFormContext } from '../FormContext';

const CheckboxWidget = ({
                          value,
                          disabled,
                          readonly,
                          required,
                          label,
                          onChange,
                          schema,
                        }: WidgetProps) => {

  return (
    <>
      {
        schema.title ? <TitleField title={ schema.title } required={ required }/> : null
      }
      {
        schema.description ? <DescriptionField description={ schema.description }/> : null
      }
      <CheckBoxComponent
        label={ schema.title || label }
        selected={ value }
        onChange={ onChange }
        disabled={ disabled || readonly }
      />
    </>
  );
};


type CheckBoxProps = {
  disabled?: boolean;
  onChange: (selected: boolean) => void;
  selected: boolean;
  label: string;
}

export const CheckBoxComponent = ({ disabled, onChange, selected, label }: CheckBoxProps) => {
  const { theme } = useFormContext();

  const themedStyle = {
    borderColor: selected ? theme.highlightColor : theme.textColor,
    backgroundColor: selected ? theme.highlightColor : 'transparent',
  };

  return (
    <TouchableOpacity
      style={ styles.container }
      disabled={ disabled }
      onPress={ () => onChange(!selected) }
    >
      <View style={ [ styles.checkbox, themedStyle ] }>
        { selected && <Text style={ styles.check }>{'\u2713'}</Text> }
      </View>
      <Text style={ styles.text }>{ label }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    marginRight: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    color: 'white',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});

export default CheckboxWidget;
