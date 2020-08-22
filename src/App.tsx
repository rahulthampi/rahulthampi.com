import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from './theme/root';

const Landing = lazy(() =>
  import(/* webpackChunkName: "landing" */ './pages/Landing'),
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={commonTheme}>
      <Suspense fallback={<h4>Please be patient.</h4>}>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
