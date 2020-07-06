import {ThemeProps} from '@rjsf/core';
import TextWidget from './TextWidget';
import TextareaWidget from './TextareaWidget';
import CheckboxWidget from './CheckboxWidget';
import CheckboxesWidget from './CheckboxesWidget';
import PasswordWidget from './PasswordWidget';
import RadioWidget from './RadioWidget';
import RangeWidget from './RangeWidget';
import TitleField from './TitleField';
import FieldTemplate from './FieldTemplate';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import ErrorList from './ErrorList';
import {MockHTMLForm} from './MockHTMLForm';

const widgets = {
  TextWidget,
  TextareaWidget,
  CheckboxWidget,
  CheckboxesWidget,
  PasswordWidget,
  RadioWidget,
  SelectWidget: RadioWidget,
  RangeWidget,
};

const fields = {
  TitleField,
};

const Theme: ThemeProps = {
  widgets,
  fields,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  tagName: MockHTMLForm,
};

export {
  Theme,
  widgets,
  fields,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  MockHTMLForm,
};
