import { ComponentClass, FunctionComponent } from 'react';
import { FormProps, withTheme } from '@rjsf/core';
import { Theme } from './Theme';

export const RNForm:
  | ComponentClass<FormProps<any>>
  | FunctionComponent<FormProps<any>> = withTheme(Theme);
