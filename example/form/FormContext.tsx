import {createContext} from 'react';

interface FormContextProps {
  theme: {
    primaryColor: string;
  };
  requiredTitle: string;
  arrayAddTitle: string;
  radioLabelMapping?: (label: string) => string;
  errorMapping?: (e: any) => void;
}

export const defaultProps: FormContextProps = {
  theme: {
    primaryColor: 'blue',
  },
  requiredTitle: '*Required',
  arrayAddTitle: 'Add',
};

export const FormContext = createContext<FormContextProps>(defaultProps);
