import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import LogInPage from './pages/login-page';
import ErrorPage from './pages/error-page';
import DashboardPage from './pages/dashboard-page';

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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
