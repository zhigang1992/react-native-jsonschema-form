import { WidgetProps } from '@rjsf/core';
import TextWidget from './TextWidget';
import React from 'react';

const PasswordWidget = (props: WidgetProps) => (
  <TextWidget {...props} secureEntry={true} />
);

export default PasswordWidget;
