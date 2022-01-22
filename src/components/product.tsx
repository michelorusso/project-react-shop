
import React, { Component, useEffect, useState } from "react";

import { store } from '../store';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";



type filter = {
    element: any
    index: number
}

export const Product = ({ element , index }: filter) => {
    const [Quantita, setQuantita] = useState(element.QuantitySelected)
    const [Message, setMessage] = useState('')

    element.QuantitySelected = Quantita
    let getCarrello: any = localStorage.getItem('carrello');
    let carrel = JSON.parse(getCarrello)

    return <div className="position-relative">

    <div key={index} className="d-flex justify-content-between align-items-center">
        <img width={'80px'} className="pr-2" src={element.Thumb} alt="" />
        <div className="textElementCart ">
            <div className=''>{element.NameProduct}</div>
            <div>Taglia: {element.SizeSelected}</div>
            <div className="d-flex align-items-center">
                <span>Colore: </span>
                <span className="colorProduct" style={{ 'backgroundColor': `${element.ColorSelected}` }}></span>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{ 'width': '80px' }}>Q.tà:

                <span><button className="btnCart" onClick={(()=>{
                     if (Quantita>0) {
                        setQuantita(Quantita-1)
                        setMessage('')
                    }else{
                        setMessage('Son gia 0')
                    }
                })}>-</button></span>
                <span>{Quantita}</span>
                <span><button className="btnCart" onClick={(()=>{
                     if (Quantita < element.QuantityDecurted) {
                        setQuantita(Quantita+1)
                        console.log(element)
                        setMessage('')
                    }else{
                        setMessage('Disponibilita inferiore a '+Quantita)
                    }
                })}>+</button></span>
                

            </div>
            <span> {Message}</span>
        </div>
        <div className="changeProductQT d-flex align-items-start">
            <span>Prezzo: {(element.Price * element.QuantitySelected).toFixed(2)} €</span>
        </div>
        <div>
            <div className="btnRemove"><button className="bt" value={index} onClick={(obj: any) => {

                // dispatch({
                //     type: 'REMOVE_CART',
                //     id: obj.target.value,
                // });


                carrel.splice(obj.target.value,1)

                localStorage.setItem('carrello', JSON.stringify(carrel));
 
            }}>x</button></div>
        </div>
    </div>
    <hr />

</div>
}

export default Product;