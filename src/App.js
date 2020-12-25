import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';

import GlobalStyle from './styles/global';

import { store, persistor } from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
