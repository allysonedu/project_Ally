import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import colors from './shared/styles/themes/colors';

import { AppRoutes } from './shared/routes';

import GlobalStyles from './shared/styles/GlobalStyles';

import { AppProvider } from './shared/context';

export const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <AppProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
};
