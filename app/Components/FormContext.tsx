// app/Components/FormContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  role: 'student' | 'parent' | 'teacher' | '';
  student?: any;
  parent?: any;
  teacher?: any;
}

const FormContext = createContext<{
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}>({
  formData: { role: '' },
  setFormData: () => {},
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({ role: '' });

  const update = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData: update }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);