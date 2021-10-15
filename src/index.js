import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import {store, persistor} from './Redux/store'
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading = "null" persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>,  
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);
