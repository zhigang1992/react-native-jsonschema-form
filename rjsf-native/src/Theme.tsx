import {ThemeProps} from 'react-jsonschema-form';
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

const Theme: ThemeProps = {
  widgets: {
    TextWidget,
    TextareaWidget,
    CheckboxWidget,
    CheckboxesWidget,
    PasswordWidget,
    RadioWidget,
    SelectWidget: RadioWidget,
    RangeWidget,
  },
  fields: {
    TitleField,
  },
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
};

export default Theme;
