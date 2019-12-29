import React, {useState} from 'react';

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
  multiline,
}: WidgetProps & {multiline?: boolean}) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      multiline={multiline}
      placeholder={label}
      autoFocus={autofocus}
      editable={!disabled && !readonly}
      value={value ? value : ''}
      onChangeText={newText =>
        onChange(newText === '' ? options.emptyValue : newText)
      }
      onBlur={() => {
        setFocused(false);
        onBlur(id, value);
      }}
      onFocus={() => {
        setFocused(true);
        onFocus(id, value);
      }}
      style={[
        styles.input,
        multiline && styles.multiline,
        focused && styles.focused,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#979B9E',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 4,
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  multiline: {
    minHeight: 100,
    lineHeight: 22,
  },
  focused: {
    borderColor: '#2c3e50',
  },
});

export default TextWidget;
