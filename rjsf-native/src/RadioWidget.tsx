import React, {useContext} from 'react';

import {WidgetProps} from 'react-jsonschema-form';
import {BooleanToggleRow} from './CheckboxWidget';
import {StyleSheet, View} from 'react-native';
import {FormContext} from './FormContext';

const RadioWidget = ({
  options,
  value,
  disabled,
  readonly,
  onChange,
}: WidgetProps) => {
  const {enumOptions, enumDisabled} = options;

  const _onChange = (newValue: any) => onChange(newValue);

  const context = useContext(FormContext);

  return (
    <View style={styles.container}>
      {(enumOptions as any).map((option: any, i: number) => {
        const itemDisabled =
          enumDisabled && (enumDisabled as any).indexOf(option.value) !== -1;

        return (
          <RadioComponent
            key={i}
            onChange={() => _onChange(option.value)}
            selected={option.value === value}
            label={
              context.radioLabelMapping
                ? context.radioLabelMapping(option.label)
                : option.label
            }
            disabled={disabled || itemDisabled || readonly}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

const RadioComponent = (props: {
  disabled?: boolean;
  onChange: (selected: boolean) => void;
  selected: boolean;
  label: string;
}) => (
  <BooleanToggleRow
    {...props}
    on={require('../assets/radioOn.png')}
    off={require('../assets/radioOff.png')}
  />
);

export default RadioWidget;
