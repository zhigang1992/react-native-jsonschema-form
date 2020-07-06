import { ThemeProps } from '@rjsf/core';
import FieldTemplate from './FieldTemplate';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import ErrorList from './ErrorList';
import { MockHTMLForm } from './MockHTMLForm';
import { Widgets } from './Widgets';
import { Fields } from './Fields';

const Theme: ThemeProps = {
  widgets: Widgets,
  fields: Fields,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  tagName: MockHTMLForm,
};

export {
  Theme,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  MockHTMLForm,
};
