import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../src/Layout/Layout';
import Home from './components/Home';
import Dashboard from './features/dashboard/Dashboard';  
import AdminPanel from './features/auth/AdminRoutea/AdminPanel';  
import { ProtectedRoute, AdminRoute } from './ProtectedRoute';  
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Adminaccess from './features/auth/AdminRoutea/Adminacces';
import User from './features/dashboard/User'
import Register2 from './features/auth/Register2';
import Login2 from './features/auth/Login2'
import { useAuth } from './features/Usercontext';



function App() {
  
  let val = {
    role: 0 
  };

  const [user, setUser] = useState(val);  

  const [auth, setAuth] = useAuth();  
  console.log(auth)
  const handleLogin = (userData) => {
    setUser(userData);  
  };

  const handleLogout = () => {
    setUser(null);  
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout handleLogout={handleLogout} />,  
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },  
        { path: 'login', element: <Login2 /> },  
        { path: 'register', element: <Register2 /> },  
        { path: '*', element: <PageNotFound /> },  

        {
          path: 'dashboard',
          element: <ProtectedRoute user={user} />, 
          children: [
            { path: '', element: <Dashboard /> },   
            { path: 'user', element: <User /> },     
          ],
        },

        {
          path: 'admin',
          element: <AdminRoute user={user} />,  
          children: [
            { path: '', element: <AdminPanel /> },     
            { path: 'adminaccess', element: <Adminaccess /> },  
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  
}

export default App;
