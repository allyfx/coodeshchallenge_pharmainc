import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import {Home} from './src/pages/Home';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
