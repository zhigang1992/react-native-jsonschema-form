import { createContext, useContext } from 'react';

interface FormContextProps {
  theme: {
    primaryColor: string; // Your main theme color. Used for e.g. buttons
    highlightColor: string; // Used for focused inputs, checked checkboxes, slider...
    borderColor: string; // Color of textinput borders
    textColor: string;
    placeholderTextColor: string;
    errorColor: string;
    [propName: string]: any;
  };
  requiredTitle: string;
  arrayAddTitle: string;
  radioLabelMapping?: (label: string) => string;
  [propName: string]: any;
}

export const defaultProps: FormContextProps = {
  theme: {
    primaryColor: '#2196F3',
    highlightColor: '#2196F3',
    borderColor: '#979B9E',
    textColor: '#333333',
    placeholderTextColor: '#999999',
    errorColor: '#a94442',
  },
  requiredTitle: '*',
  arrayAddTitle: 'Add',
};

export const FormContext = createContext<FormContextProps>(defaultProps);
export const useFormContext = () => useContext(FormContext);
