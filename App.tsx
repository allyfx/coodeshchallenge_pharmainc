import 'react-native-gesture-handler';

import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import {InfoPatientContextProvider} from './src/contexts/InfoPatientContext';
import {PatientModalContextProvider} from './src/contexts/PatientModalContext';

import {Home} from './src/pages/Home';

import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <InfoPatientContextProvider>
        <PatientModalContextProvider>
          <Home />
        </PatientModalContextProvider>
      </InfoPatientContextProvider>
    </ThemeProvider>
  );
}
