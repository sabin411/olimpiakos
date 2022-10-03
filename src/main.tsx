import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// packages
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import '../src/i18n/i18n';

// constant
import { footer } from './constants/en';
import { footer as footerFr } from './constants/fr';

// styles
import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
