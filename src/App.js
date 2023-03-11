import React, { useCallback, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthContext } from './context/auth-context';
import LogInPage from './pages/login-page';
import ErrorPage from './pages/error-page';
import DashboardPage from './pages/dashboard-page';
import NewQuotePage from './pages/new-quote-page';

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const login = useCallback((email, username) => {
    setIsLoggedIn(true);
    setEmail(email);
    setUsername(username);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUsername(null);
    setEmail(null);
  }, []);

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

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        username,
        email,
        login,
        logout
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}

export default App;
