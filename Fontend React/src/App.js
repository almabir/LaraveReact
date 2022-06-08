import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import UpdateProduct from './components/UpdateProduct';
import Register from './components/Register';
import Procted from './components/Procted';
import ProductList from './components/ProductList';
import SearchProduct from './components/SearchProduct'
import React  from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
    
      <Routes>
      <Route path='/login' element={ <Login/> }> </Route>
      <Route path='/add' element={ <Procted Com={AddProduct}/> }> </Route>
      <Route path='/' element={ <Procted Com={ProductList}/> }> </Route>
      <Route path='/update/:id' element={ <Procted Com={UpdateProduct}/> }> </Route>
      <Route path='/search' element={ <Procted Com={SearchProduct}/> }> </Route>
      <Route path='/delete' element={ <Procted Com={DeleteProduct}/> }> </Route>
      <Route path='/register' element={ <Register/> }> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
