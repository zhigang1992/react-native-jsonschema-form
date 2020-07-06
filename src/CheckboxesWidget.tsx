import React from 'react';

import { WidgetProps } from '@rjsf/core';
import { CheckBoxComponent } from './CheckboxWidget';
import { StyleSheet, View } from 'react-native';

const selectValue = (value: any, selected: any, all: any) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) - all.indexOf(b));
};

const deselectValue = (value: any, selected: any) => {
  return selected.filter((v: any) => v !== value);
};

const CheckboxesWidget = ({
  disabled,
  options,
  value,
  readonly,
  onChange,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = (option: any) => (checked: boolean) => {
    const all = (enumOptions as any).map(({ value: v }: any) => v);

    if (checked) {
      onChange(selectValue(option.value, value, all));
    } else {
      onChange(deselectValue(option.value, value));
    }
  };

  return (
    <View style={styles.container}>
      {(enumOptions as any).map((option: any, index: number) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled =
          enumDisabled && (enumDisabled as any).indexOf(option.value) !== -1;
        return (
          <CheckBoxComponent
            key={index}
            onChange={_onChange(option)}
            selected={checked}
            label={option.label}
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

export default CheckboxesWidget;
