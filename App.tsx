import 'react-native-gesture-handler';

import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ThemeProvider} from 'styled-components/native';
import {InfoPatientContextProvider} from './src/contexts/InfoPatientContext';
import {PatientModalContextProvider} from './src/contexts/PatientModalContext';

import {Home} from './src/pages/Home';

import theme from './src/styles/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <InfoPatientContextProvider>
          <PatientModalContextProvider>
            <Home />
          </PatientModalContextProvider>
        </InfoPatientContextProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
