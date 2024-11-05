
import {  Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login2';
import Signup from './features/auth/Register2';
import Layout from './Layout/Layout';
import Home from './components/Home'
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />} >

        <Route path="/home" element={<Home/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
        
        </Route>
      </Routes>
    </>
  );
}

export default App;
