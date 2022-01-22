import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Anagrafica from "./AdminPage/anagrafica";
import Ordini from "./AdminPage/ordine"
import ModifyProduct from "./AdminPage/modifyProduct"
import ModProdSelected from "./AdminPage/productSelectedMod"
import AddProduct from "./AdminPage/addProduct"
import { useSelector } from "react-redux";
import Header from './header'

export const Admin = () => {

    const numero = useSelector((state: any) => state.ProdSelected);
    
    return <div>
        <Header />
        <h1 className="container">Area Personale</h1>
        <div className="adminPage d-flex container">
            <aside >
                <ul style={{'borderRight':'1px solid black' , 'marginRight': '10px'}}>
                    <li><Link to={`/AdminPage/anagrafica`}>Anagrafica</Link></li>
                    <li><Link to={`/AdminPage/ordini`}>Cronologia Ordini</Link></li>
                    <li><Link to={`/AdminPage/modifica`}>Modifica Prodotti</Link></li>
                    <li><Link to={`/AdminPage/aggiungi`}>Aggiungi Prodotti</Link></li>
                </ul>
            </aside>
            <main style={{'width':'100%'}}>
            
                <div>
                    <Routes>
                        <Route path={`/anagrafica`} element={<Anagrafica></Anagrafica>}></Route>
                        <Route path={`/ordini`} element={<Ordini numero={numero}></Ordini>}></Route>
                        <Route path={`/modifica/*`} element={<ModifyProduct></ModifyProduct>}></Route>
                        <Route path={`/modifica/${numero}`} element={<ModProdSelected numero={numero}></ModProdSelected>}></Route>
                        <Route path={`/aggiungi`} element={<AddProduct></AddProduct>}></Route>
                    </Routes>
                </div>
            </main>
        </div>
       
    </div>
}
export default Admin;