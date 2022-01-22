import React, {Component, useState} from 'react';

import { useDispatch } from 'react-redux'
import { store } from './store'
import CardClothes from './components/cardClothes'
import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import Staff from './components/staff'
import Login from './components/login'
import Admin from './components/admin'
import Anagrafica from './components/AdminPage/anagrafica';
import Cart from './components/cart'
import Ordine from './components/AdminPage/ordine'
import CheckOut from './components/checkOut'
import CheckOutEnd from './components/checkOutRicevuta'
import { useSelector } from 'react-redux'  //importo i moduli per:
import Search from './components/search'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { Check } from 'react-bootstrap-icons';

function App() {
  
  const dispatch = useDispatch();

  const numero = useSelector((state: any) => state.ProdSelected);
  const creaState = store.getState()
  const filtroDescription = creaState.DescriptionSearch
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<CardClothes></CardClothes>} />
              <Route path='/Cart/checkOut/ricevuta' element={<CheckOutEnd></CheckOutEnd>} />
              <Route path={`/card/${numero}`} element={<Card numero={numero}></Card>}></Route>
              <Route path={`/search`} element={<Search ></Search>}></Route>
              <Route path={`/Cart`} element={<Cart></Cart>}></Route>
              <Route path={`/Cart`} element={<Cart></Cart>}></Route>
              <Route path={`/Cart/checkOut`} element={<CheckOut></CheckOut>}></Route>
              <Route path={`/staff`} element={<Staff></Staff>}></Route>
              <Route path={`/cart`} element={<Cart></Cart>}></Route>
              <Route path={`/login`} element={<Login></Login>}></Route>
              <Route path={`/AdminPage/*`} element={<Admin></Admin>}></Route>
          </Routes>
            
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
