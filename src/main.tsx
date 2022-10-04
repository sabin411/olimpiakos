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

// styles
import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL_GRAPHQL } from '@/env';

// apollo client
const client = new ApolloClient({
  uri: BASE_URL_GRAPHQL,
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
