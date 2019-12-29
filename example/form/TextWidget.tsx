import React from 'react';

import {WidgetProps} from 'react-jsonschema-form';
import {StyleSheet, TextInput} from 'react-native';

const TextWidget = ({
  id,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
}: WidgetProps) => {
  return (
    <TextInput
      multiline={false}
      placeholder={label}
      autoFocus={autofocus}
      editable={!disabled && !readonly}
      value={value ? value : ''}
      onChangeText={newText =>
        onChange(newText === '' ? options.emptyValue : newText)
      }
      onBlur={() => onBlur(id, value)}
      onFocus={() => onFocus(id, value)}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#979B9E',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default TextWidget;
