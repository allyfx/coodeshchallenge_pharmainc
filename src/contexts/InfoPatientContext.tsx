import React, {createContext, ReactNode, useContext, useState} from 'react';

import {IPatientData} from '../utils/dto';

interface ContextData {
  selectedPatient: IPatientData | undefined;
  setSelectedPatient: (patient: IPatientData | undefined) => void;
}

const InfoPatientContext = createContext({} as ContextData);

interface ProviderProps {
  children: ReactNode;
}

export function InfoPatientContextProvider({children}: ProviderProps) {
  const [selectedPatient, setSelectedPatient] = useState<IPatientData>();

  return (
    <InfoPatientContext.Provider
      value={{
        selectedPatient,
        setSelectedPatient,
      }}>
      {children}
    </InfoPatientContext.Provider>
  );
}

export function useInfoPatient() {
  const context = useContext(InfoPatientContext);

  if (!context) {
    throw new Error(
      'useInfoPatient should be used inside InfoPatientContextProvider',
    );
  }

  return context;
}
