import { WidgetProps } from '@rjsf/core';
import TextWidget from './TextWidget';
import React from 'react';

const TextareaWidget = (props: WidgetProps) => {
  return <TextWidget {...props} multiline={true} />;
};

export default TextareaWidget;
