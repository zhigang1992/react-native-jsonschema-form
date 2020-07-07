import { createContext, useContext } from 'react';

interface FormContextProps {
  theme: {
    primaryColor: string;
  };
  requiredTitle: string;
  arrayAddTitle: string;
  radioLabelMapping?: (label: string) => string;
}

export const defaultProps: FormContextProps = {
  theme: {
    primaryColor: '#2196F3',
  },
  requiredTitle: '*',
  arrayAddTitle: 'Add',
};

export const FormContext = createContext<FormContextProps>(defaultProps);
export const useFormContext = () => useContext(FormContext);
