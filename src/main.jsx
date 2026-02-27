import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLoader from './AppLoader';
import { AppStateProvider } from './AppStateProvider';
import './styles/styles.scss';

// Get the root DOM element
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppStateProvider>
      <AppLoader />
    </AppStateProvider>
  </React.StrictMode>
);
