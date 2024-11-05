
import {  Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Regsiter';
import Layout from './Layout/Layout';

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Layout />} >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
