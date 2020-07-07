import React from 'react';

import { WidgetProps } from '@rjsf/core';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DescriptionField from '../fields/DescriptionField';
import TitleField from '../fields/TitleField';

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
      { schema.title && <TitleField title={ schema.title } required={ required }/> }
      { schema.description && (
        <DescriptionField description={ schema.description }/>
      ) }
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

export const CheckBoxComponent = (props: CheckBoxProps) => (
  <BooleanToggleRow
    { ...props }
    on={ require('../../assets/checkboxOn.png') }
    off={ require('../../assets/checkboxOff.png') }
  />
);


type BooleanToggleProps = {
  disabled?: boolean;
  onChange: (selected: boolean) => void;
  selected: boolean;
  label: string;
  on: ImageSourcePropType;
  off: ImageSourcePropType;
}

export const BooleanToggleRow = ({
                                   disabled,
                                   onChange,
                                   selected,
                                   label,
                                   on,
                                   off,
                                 }: BooleanToggleProps) => (
  <TouchableOpacity
    style={ styles.container }
    disabled={ disabled }
    onPress={ () => onChange(!selected) }
  >
    <Image source={ selected ? on : off } style={ styles.checkbox }/>
    <Text style={ styles.text }>{ label }</Text>
  </TouchableOpacity>
);

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
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});

export default CheckboxWidget;
