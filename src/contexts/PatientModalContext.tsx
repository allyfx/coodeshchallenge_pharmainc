import React, {createContext, ReactNode, useContext, useRef} from 'react';

import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import BottomSheet from '@gorhom/bottom-sheet';

import {PatientInfoModal} from '../components/PatientInfoModal';

interface ContextData {
  modalRef: React.RefObject<BottomSheetMethods>;
}

const PatientModalContext = createContext({} as ContextData);

interface ProviderProps {
  children: ReactNode;
}

export function PatientModalContextProvider({children}: ProviderProps) {
  const modalRef = useRef<BottomSheet>(null);

  return (
    <PatientModalContext.Provider
      value={{
        modalRef,
      }}>
      {children}

      <PatientInfoModal modalRef={modalRef} />
    </PatientModalContext.Provider>
  );
}

export function usePatientModal() {
  const context = useContext(PatientModalContext);

  if (!context) {
    throw new Error(
      'usePatientModal should be used inside PatientModalContextProvider',
    );
  }

  return context;
}
