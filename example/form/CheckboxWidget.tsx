import React from 'react';

import {WidgetProps} from 'react-jsonschema-form';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DescriptionField from './DescriptionField';
import TitleField from './TitleField';

const CheckboxWidget = (props: WidgetProps) => {
  const {value, disabled, readonly, required, label, onChange, schema} = props;

  return (
    <>
      {schema.title && <TitleField title={schema.title} required={required} />}
      {schema.description && (
        <DescriptionField description={schema.description} />
      )}
      <CheckBoxComponent
        label={schema.title || label}
        selected={value}
        onChange={onChange}
        disabled={disabled || readonly}
      />
    </>
  );
};

export const CheckBoxComponent = ({
  disabled,
  onChange,
  selected,
  label,
}: {
  disabled?: boolean;
  onChange: (selected: boolean) => void;
  selected: boolean;
  label: string;
}) => (
  <TouchableOpacity
    style={styles.container}
    disabled={disabled}
    onPress={() => onChange(!selected)}>
    <Image
      source={
        selected
          ? require('./assets/checkboxOn.png')
          : require('./assets/checkboxOff.png')
      }
      style={styles.checkbox}
    />
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  checkbox: {
    width: 18,
    height: 18,
    marginRight: 13,
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});

export default CheckboxWidget;
