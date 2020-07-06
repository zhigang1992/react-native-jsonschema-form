import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { WidgetProps } from '@rjsf/core';

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
  secureEntry,
  schema,
}: WidgetProps & { multiline?: boolean; secureEntry?: boolean }) => {
  const [ focused, setFocused ] = useState(false);
  return (
    <TextInput
      multiline={multiline}
      placeholder={label}
      autoFocus={autofocus}
      editable={!disabled && !readonly}
      keyboardType={schema.type === 'number' ? 'numeric' : 'default'}
      value={value ? value.toString() : ''}
      secureTextEntry={secureEntry}
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
