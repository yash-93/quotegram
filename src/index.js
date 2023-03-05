import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import LogInPage from './pages/login-page';
import ErrorPage from './pages/error-page';
import DashboardPage from './pages/dashboard-page';
import NewQuotePage from './pages/new-quote-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogInPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/new-quote',
    element: <NewQuotePage />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
