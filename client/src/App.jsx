import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Cart from './components/navigation/cart/Cart';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path='/account/login' element={<Login />}/>
        <Route path='/account/register' element={<Register />}/>
        <Route path='cart' element={<Cart />}/>
      </Route>
    </Routes>
  )
}

export default App;
