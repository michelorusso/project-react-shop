import React, { useState } from "react";
import logo from "../img/logo_small-white.png"
import {
    BrowserRouter,
    Link,
    Routes,
    Route
} from 'react-router-dom';

import { store } from '../store';
import { useDispatch, useSelector } from "react-redux";
import { spawn } from "child_process";

import emptyCart from '../img/cartEmpty.png'


function Header() {
    var totCar = 0
    const arrayMagazine = store.getState();
    const [filtroSearch , setFiltroSearch] = useState('')
    const dispatch = useDispatch()

    let maga :any= localStorage.getItem('magazine')
    let newMagazine =  JSON.parse(maga)

    const arrayGeneriAbbigliamento = [
        "Maglieria & Felpe",
        "Camicie",
        "Pantaloni",
        "Maglieria",
        "Jeans",
        "Giacche",
        "Cappotti",
        "T-shirt & Polo",
        "Pantaloni sportivi e Joggers",
        "Bermude",
        "Moda mare",
        "Completi e cravatte",
        "Slip",
        "Boxer",
        "Calze",
        "Pigiami",
        "Funny"
    ]
    const arrayGeneriScarpe = [
        "Sneakers",
        "Casual",
        "Velista",
        "Infradito",
        "Calze",
        "Funny"
    ]
    const arrayPromo = [
        "Abbigliamento",
        "Scarpe",
        "Gucci",
        "Armani",
        "Top Brand",
        "Funny"
    ]

    // variabile booleana , in caso di utente loggato restituirà true in modo tale da cambiare alcuni elementi del codice
    const login = useSelector((state: any) => state.LoginUser);


    const Master = useSelector((state: any) => state.UserSelected);

    const [price , setPrice] = useState(0)
    let newPrice = 0;

    // function stampa(array:any,position:any) {
    //     let stampaLi:any = document.getElementsByClassName(position);
    //     array.map((element:any,index:any) => {
    //             stampaLi += `<li key=${index}>${element}</li>`
    //     })
    //     return stampaLi
    // }
    const arrayCarrello = store.getState();
    const carrello = arrayCarrello.carrello.carrello;
        const cart :any = [];
    for(var i = 1 ; i < carrello.length; i ++) {
        cart.push(carrello[i])
    }

    
    let totalPrice = 0;
    for (let i = 1 ; i < carrello.length; i++) {
        totalPrice+=carrello[i].Price;
    }
    

    // let cart = localStorage.getItem('cart');
    return (
        <div className="bgStyle text-gray">

            <nav className="info">
                <div>
                    <ul>
                        <li>Reso in 100 giorni</li>
                        <li>Spedizione e reso gratuiti*</li>
                        <li>Aiuto e contatti</li>
                    </ul>

                </div>
            </nav>
            <nav>
                <div className="navSearch">
                    <ul className="menu">
                        <li>
                            <Link to={'/'}><img src={logo} width={'150px'} alt="logo fighissimo" /></Link>

                        </li>
                        <li>
                            <div style={{ 'paddingTop': '5px' }} className="bg-white position-relative sear">
                                <label htmlFor=""><Link onClick={(()=>{
                                    arrayMagazine.DescriptionSearch =filtroSearch
                                })} to={'/search'}><i className="fas fa-search bg-white text-dark pl-2 pr-3"></i></Link></label>
                                <input id="search"  type="search" placeholder="Ricerca..." style={{'outline': 'none', 'border':'none'}} onChange={((ele)=>{
                                        setFiltroSearch(ele.target.value)
                                        dispatch({
                                            type: 'DESCRIPTION_SELECTED',
                                            descriptionSearch: filtroSearch,
                                        });
                                })}/>

                                {
                                    filtroSearch != '' ? <div style={{'zIndex': '3'}} className="searchChild position-absolute">
                                         {newMagazine.map((element: any, i :number) =>{
                                             return <div>
                                                 {element.NameProduct.includes(filtroSearch)? <div>
                                                    <div className="d-flex align-items-center ">
                                                        <img width={'70px'} className="pr-1" src={element.Thumb} alt="" />
                                                        <div className="textElementCart">
                                                            <div>{element.NameProduct} </div>
                                                        </div>
                                                    </div>
                                                 </div> :'' }
                                             </div>
                                         })}
                                         </div>: ''
                                }
                                
                            </div>
                            
                        </li>
                        <li>
                            <Link className="link-light" style={{ 'textDecoration': 'none', 'paddingRight': '15px' }} to={`/staff`}>Chi Siamo</Link>
                            {arrayMagazine.LoginUser.log == false ? <Link className="link-light" style={{ 'textDecoration': 'none', 'paddingRight': '15px' }} to={`/login`}>Login</Link> : <Link className="link-light" style={{ 'textDecoration': 'none', 'paddingRight': '15px' }} to={`/AdminPage`}>{arrayMagazine.LoginUser.utenti[Master].nome}</Link>}
                            
                            <Link className="link" to={'/Cart'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </Link>

                            <ul className="tenda " id="idAbbigliamento">
                                
                                <li className="carrello">
                                    <h2 className="text-center">CARRELLO</h2>
                                    {carrello.length > 1 ? cart.map((element :any, index :number) => {

                                        return <div>
                                            <div key={index} className="d-flex align-items-center ">
                                            <img width={'70px'} className="pr-1" src={element.Thumb} alt="" />
                                            <div className="textElementCart">
                                                <div>{element.NameProduct} </div>
                                                <div>Taglia: {element.SizeSelected}</div>
                                                {
                                                    element.Price == null ? '' : <div>{`${element.Price}$ x ${element.QuantitySelected}`}</div>
                                                }
                                            </div>           
                                        </div><hr />
                                         </div>
                                    }) : <div>
                                            <div className="pt-4">
                                                <img style={{'width': '100%'}} src={emptyCart} alt="empty" />
                                            </div>
                                        </div>}
                                    <div className="text-center mt-3"> 
                                       {
                                           carrello.length > 1 ? <div>
                                                    <div>
                                                        Totale ordine: {totalPrice} $
                                                    </div>
                                                    <div>
                                                        <Link className=" btn btn-dark text-decoration-none" to={'/Cart'}>Acquista</Link>
                                                    </div> 
                                               </div> : ''
                                       } 
                                    </div>
                                   
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav>

                <header className="nav">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li>
                            <Link className="text-dark" to={`/search`} onClick={(()=>{
                               
                                dispatch({
                                    type: 'FILTER',
                                    Filtri: 'Uomo',
                                });
                                dispatch({
                                    type: 'MARCA',
                                    marca: '',
                                });
                                dispatch({
                                    type: 'FILTERTYPE',
                                    filtriType:''
                                });
                            })}>
                                Uomo
                            </Link>
                        </li>
                        <li>
                            <Link className="text-dark" to={`/search`} onClick={(()=>{
                                 dispatch({
                                    type: 'FILTER',
                                    Filtri: 'Donna',
                                });
                                dispatch({
                                    type: 'MARCA',
                                    marca: '',
                                });
                                dispatch({
                                    type: 'FILTERTYPE',
                                    filtriType:''
                                });
                            })}>
                                Donna
                            </Link>
                        </li>
                       
                        <li>
                            <Link className="text-dark" to={`/search`} onClick={(()=>{
                                dispatch({
                                    type: 'FILTER',
                                    Filtri: '',
                                });
                                dispatch({
                                    type: 'MARCA',
                                    marca: '',
                                });
                                dispatch({
                                    type: 'FILTERTYPE',
                                    filtriType:''
                                });
                            })}>Abbigliamento</Link >
                            <ul className="tenda text-dark" id="idAbbigliamento">
                                {
                                    //   stampa(arrayGeneriAbbigliamento,'idAbbigliamento')
                                    arrayGeneriAbbigliamento.map((element: any, index: any) => {
                                        return (
                                            <li className="text-dark" key={index}>
                                                <Link to={`/search`} onClick={(()=>{
                                dispatch({
                                    type: 'FILTER',
                                    Filtri: '',
                                });
                                dispatch({
                                    type: 'MARCA',
                                    marca: '',
                                });
                                dispatch({
                                    type: 'FILTERTYPE',
                                    filtriType:element
                                });
                            })}>{element}</Link>
                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        <li>
                        <Link className="text-dark" to={`/search`} onClick={(()=>{
                                dispatch({
                                    type: 'FILTERTYPE',
                                    filtriType:'Scarpe'
                                });
                                dispatch({
                                    type: 'FILTER',
                                    Filtri: '',
                                });
                                dispatch({
                                    type: 'MARCA',
                                    marca: '',
                                });
                            })}>Scarpe</Link >
                            <ul className="tenda text-dark" id="idScarpe">
                                {
                                    //   stampa(arrayGeneriScarpe,'idScarpe)
                                    arrayGeneriScarpe.map((element: any, index: any) => {
                                        return (
                                            <li className="text-dark" key={index}><a href="">{element}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        <li>
                        <Link className="text-dark" to={`/search`} onClick={(()=>{
                                dispatch({
                                    type: 'FILTERTYPE',
                                    filtriType:''
                                });
                                dispatch({
                                    type: 'FILTER',
                                    Filtri: '',
                                });
                                dispatch({
                                    type: 'MARCA',
                                    marca: '',
                                });
                            })}>Promo</Link >
                            <ul className="tenda text-dark" id="idPromo" style={{'right': '70px'}}>
                                {
                                    //   stampa(arrayPromo,'idPromo')
                                    arrayPromo.map((element: any, index: any) => {
                                        return (
                                            <li className="text-dark" key={index}><a href="">{element}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </header>
            </nav>
        </div>
    );
}

export default Header;