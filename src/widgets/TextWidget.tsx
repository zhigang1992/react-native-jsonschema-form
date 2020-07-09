import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputIOSProps } from 'react-native';
import { WidgetProps } from '@rjsf/core';
import { useFormContext } from '../FormContext';

type TextWidgetProps = WidgetProps & {
  multiline?: boolean;
  secureEntry?: boolean;
  textContentType?: TextInputIOSProps['textContentType']
}

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
                      textContentType = 'none',
                    }: TextWidgetProps) => {
  const { theme } = useFormContext();
  const [ focused, setFocused ] = useState(false);

  const themedStyle = {
    borderColor: focused ? theme.highlightColor : theme.borderColor,
    borderWidth: focused ? 2 : 1,
    color: theme.textColor,
  };

  return (
    <TextInput
      multiline={ multiline }
      placeholder={ label }
      autoFocus={ autofocus }
      editable={ !disabled && !readonly }
      keyboardType={ schema.type === 'number' ? 'numeric' : 'default' }
      value={ value ? value.toString() : '' }
      secureTextEntry={ secureEntry }
      textContentType={ textContentType }
      onChangeText={ newText =>
        onChange(newText === '' ? options.emptyValue : newText)
      }
      onBlur={ () => {
        setFocused(false);
        onBlur(id, value);
      } }
      onFocus={ () => {
        setFocused(true);
        onFocus(id, value);
      } }
      selectionColor={ theme.highlightColor }
      style={ [
        styles.input,
        themedStyle,
        multiline && styles.multiline,
      ] }
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
    fontSize: 16,
    color: '#333333',
  },
  multiline: {
    minHeight: 100,
    lineHeight: 22,
  },
});

export default TextWidget;
