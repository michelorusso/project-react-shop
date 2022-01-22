import React, { Component, useState } from "react";
import {
    BrowserRouter,
    Link,
    Routes,
    Route
} from 'react-router-dom';
import Product from './product'
import { store } from '../../src/store';
import { useDispatch, useSelector } from "react-redux";
import carrello from "../reducers/carrello";
import Header from './header'
import emptyCart from '../img/cartEmpty.png'
import magazine from "../reducers/readMagazine";

export const Cart = () => {
    const arrayCarrello = store.getState();
    var arrayComprati: any = []
    const iva = 21
    let day = '';
    var totCar: any = 0
    console.log(arrayCarrello.carrello.carrello)
    const [tot, setTot] = useState(arrayCarrello.carrello.Totale)
    arrayCarrello.carrello.Totale = 0
    const dispatch = useDispatch();
    let carrello: any = arrayCarrello.carrello.carrello;
    const cart :any = [];
    for(var i = 1 ; i < carrello.length; i ++) {
        cart.push(carrello[i])
    }
    return (<div className="backgroundCart">
        <Header />
        <div className="containerCheckOut container">
            {carrello.length > 1 ? <section className="infoProduct ">
                <div>
                    <h2>Ordini Carrello</h2>
                </div>
                <div className="d-flex justify-content-between">
                     <div className="containerElementCart">
                    {
                        cart.map((element: any, index : number) => {
                            if (element.Price != 0) {
                                totCar += element.Price * element.QuantitySelected
                            }
                            day = element.Shipment;
                            arrayComprati.push(element.CodeProd)
                            return (element.Price != 0 ?
                                <Product element={element} index={index}></Product>
                                : '')

                        })
                    }
                </div>
                <div className='totalCart mb-5'>
                        <h4>TOTALE</h4>
                        <div >
                            <div className="d-flex justify-content-between">
                                <span>SubTotale: </span>
                                <span>{totCar != 0 ? totCar.toFixed(2) : 0} €</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Costo Spedizione: </span>
                                <span>0,00 €</span>
                            </div>
                            <div className="border-bottom">IVA {iva}%</div>
                            <div className="d-flex justify-content-between">
                                <span>Totale(IVA inclusa): </span>
                                <span>{totCar != 0 ? totCar.toFixed(2) : 0} €</span>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <Link to={`/Cart/checkOut`}><button className="btn" style={{ 'backgroundColor': 'rgb(153, 4, 4)', 'color': 'white' }} onClick={(() => {
                                arrayCarrello.readmagazine.magazine.map((element: any) => {
                                    let codProd = element.CodeProd
                                    arrayCarrello.carrello.Totale = totCar
                                    for (let i = 0; i < arrayComprati.length; i++) {
                                        // console.log(element.CodeProd)
                                        // console.log(arrayComprati[i])
                                        if (arrayComprati[i] == codProd) {
                                            // console.log(arrayComprati[i])
                                            element.sellCount = element.sellCount + 1
                                        }

                                    }
                                    // console.log(element.sellCount)
                                })
                            })}>Prosegui</button></Link>
                        </div>
                    </div>
                </div>
               

            </section> : <div>

                <div className="pt-4">
                    <img className="mt-4 mb-4" src={emptyCart} alt="empty" />
                </div>

            </div>

            }



        </div>
    </div>
    )
}

export default Cart
