import {createContext} from 'react';

interface FormContextProps {
  theme: {
    primaryColor: string;
  };
  requiredTitle: string;
}

export const defaultProps: FormContextProps = {
  theme: {
    primaryColor: 'blue',
  },
  requiredTitle: '*Required',
};

export const FormContext = createContext<FormContextProps>(defaultProps);
