import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { worker } from './api/server.js';

import './index.css'
import App from './app/containers/App.jsx'

async function main() {

  await worker.start({
    onUnhandledRequest: 'bypass'
  });

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  )
}

main();
