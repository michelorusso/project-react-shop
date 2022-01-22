import React, { Component, useEffect, useState } from "react";
import {
    BrowserRouter,
    Link,
    Routes,
    Route
} from 'react-router-dom';
import Header from './header'

import { store } from '../../src/store';
import { useDispatch, useSelector } from "react-redux";


export const Cart = () => {
    const arrayCarrello = store.getState();
    const [registred, setRegistred] = useState(false)
    const [log, setLog] = useState(false);
    const [payatHome, setPayatHOme] = useState(false)
    const [check, setCheck] = useState('Check Out')
    const [userEx, setUserEx] = useState(false)
    var pagamento = arrayCarrello.carrello.AnagraficaUser
    const carrello =  arrayCarrello.carrello.carrello
    var arrayFatture: any = arrayCarrello.carrello.arrayFatture
    const dispatch = useDispatch();
    const [img, setImg] = useState('Visa')
    const [usernamePayPal, setUsernamePayPal] = useState('')
    const [usernameBitCoin, setUsernameBitCoin] = useState('')
    const [intestatarioCarta, setIntestatarioCarta] = useState('')
    const [password, setPassword] = useState('')
    const [numeroCarta, setNumeroCarta] = useState('')
    const [scadenzaCarta, setScadenzaCarta] = useState('isa')
    const [CVV, setCVV] = useState('')
    const [Name, setName] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [citta, setcitta] = useState('')
    const [zip, setzip] = useState('')
    const [andress, setAndress] = useState('')
    const [bit , setBit] = useState(false);

    const [link, setLink] = useState('/Cart/checkOut')
    const [error, setError] = useState('')

    
    const arrayPagamentoAnagrafica = {
        Name: Name,
        LastName: LastName,
        email: email,
        password: password,
        state: state,
        zip: zip,
        citta: citta,
        andress: andress,
        totale: arrayCarrello.carrello.Totale
    }
    const arrayMethodPagamento = {
        circuito: img,
        bitcoin: bit,
        usernamePayPal: usernamePayPal,
        usernameBitCoin: usernameBitCoin,
        intestatarioCarta: intestatarioCarta,
        password: password,
        numeroCarta: numeroCarta,
        scadenzaCarta: scadenzaCarta,
        CVV: CVV,
        Totale: arrayCarrello.carrello.Totale
    }

    const user = {
        Name: 'Mario',
        LastName: 'Rossi',
        email: 'mario@rossi.it',
        state: 'Italia',
        zip: '70024',
        citta: 'Bari',
        andress: 'Corso Cavour 189',
        usernamePayPal: 'mario@rossi.it',
        usernameBitCoin: 'mario@rossi.it',
        intestatarioCarta: 'Mario Rossi',
        password: 'password',
        numeroCarta: 1111222233334444,
        scadenzaCarta: '02/26',
        CVV: 123,
    }
    console.log(bit)
    const tot = arrayCarrello.carrello.Totale
    const newUser = {
        Name: Name,
        LastName: LastName,
        email: email,
        state: state,
        zip: zip,
        citta: citta,
        andress: andress,
        usernamePayPal: usernamePayPal,
        usernameBitCoin: usernameBitCoin,
        intestatarioCarta: intestatarioCarta,
        password: password,
        numeroCarta: numeroCarta,
        scadenzaCarta: scadenzaCarta,
        CVV: CVV,
    }
    useEffect(() => {

    }, []);

    const arrayCircuiti = ['Visa', 'Mastercard', 'American Express', 'Maestro', 'PayPal', 'BitCoin']
    function imgCircuito(circuito: any) {
        let img
        switch (circuito) {
            case 'Visa':
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
                break;
            case 'Mastercard':
                return 'https://www.techeconomy2030.it/wp-content/uploads/2014/06/MasterCard_early_1990s_logo.png'
                break;
            case 'American Express':
                return 'https://www.hotelpostumia.it/wp-content/uploads/2019/12/American_Express_logo.png'
                break;
            case 'Maestro':
                return 'https://www.bancheitalia.it/wp-content/uploads/2013/10/bancomat%20maestro.jpg'
                break;
            case 'PayPal':
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pcgN_x4K_pl9ALYHHDSo3jF9hDp51_9KuptWITFLin5YVFp87mk1-0GqGtPqFk2mS2I&usqp=CAU'
                break;
            case 'BitCoin':
                return 'https://immagini.quotidiano.net/?url=http%3A%2F%2Fp1014p.quotidiano.net%3A80%2Fpolopoly_fs%2F1.6215023.1620914756%21%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2Fwidescreen%2Fimage.jpg&w=1320&h=742'
                break;
            default:
                break;
        }

    }
    return <div>
        <Header />
         <div className="containerCheckOut pt-4" style={{ 'flexDirection': 'column' }}>

        <h1 className="container mb-3">{check}</h1>
        <div className="adminPage d-flex container">
            <aside className="">
                <ul style={{ 'borderRight': '1px solid black' }} className="d-flex flex-column ">
                    <button className="btn check text-start" onClick={() => { setCheck('Login Utente'); setRegistred(false); setLog(true); setPayatHOme(false) }}>Login</button>
                    <button className="btn check text-start" onClick={() => { setCheck('Registrati'); setRegistred(true); setLog(false); setPayatHOme(false); setUserEx(false)  }} >Registrati</button>
                    <button className="btn check text-start" onClick={() => { setCheck('CheckOut'); setRegistred(false); setLog(false); setPayatHOme(false); setUserEx(false) }} >Check Out</button>
                    <button className="btn check text-start" onClick={() => { setCheck('Pagamento alla Consegna'); setRegistred(false); setLog(false); setPayatHOme(true); setUserEx(false) }} >Paga alla Consegna</button>
                </ul>
            </aside>

            {log != true ? <main style={{ 'width': '100%' }}>

                <div className="containerCheckOut" style={{ 'padding': '0 0' }}>
                    <section className="containerUserInfo">
                        <form className="userInfo">
                            <div className="col-5">
                                <label htmlFor="">Nome</label><br />
                                <input required type='text' placeholder="Nome" defaultValue={userEx == true ? user.Name : ''} onChange={((ele) => {
                                    setName(ele.target.value)
                                })}></input>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Cognome</label><br />
                                <input required type='text' placeholder="Cognome" defaultValue={userEx == true ? user.LastName : ''} onChange={((ele) => {
                                    setLastName(ele.target.value)
                                })}></input><br />
                            </div>
                            <div className="col-5">
                                <label htmlFor="">E Mail</label><br />
                                <input required type='email' placeholder="email" defaultValue={userEx == true ? user.email : ''} onChange={((ele) => {
                                    setEmail(ele.target.value)
                                })}></input>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Password</label><br />
                                <input required type='password' placeholder="" defaultValue={userEx == true ? user.password : ''} onChange={((ele) => {
                                    setPassword(ele.target.value)
                                })}></input>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Stato</label><br />
                                <input required type='text' placeholder="Italia" defaultValue={userEx == true ? user.state : ''} onChange={((ele) => {
                                    setState(ele.target.value)
                                })}></input>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">CAP</label><br />
                                <input required type='number' defaultValue={userEx == true ? user.zip : ''} onChange={((ele) => {
                                    setzip(ele.target.value)
                                })}></input>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Citta</label><br />
                                <input required type='text' defaultValue={userEx == true ? user.citta : ''} onChange={((ele) => {
                                    setcitta(ele.target.value)
                                })}></input>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Via</label><br />
                                <input required type='text' defaultValue={userEx == true ? user.andress : ''} onChange={((ele) => {
                                    setAndress(ele.target.value)
                                })}></input>
                            </div>
                        </form>

                    </section>
                    {payatHome == false ? <section className="checkOut">
                        <div>
                            <label htmlFor="">Seleziona il tuo circuito</label>
                            <select onChange={((ele) => {
                               setImg(ele.target.value);
                               img != 'BitCoin' ? setBit(true) : setBit(false);
                            })}>
                                {
                                    arrayCircuiti.map((element, index) => {
                                        return <option key={index} value={element}>{element}</option>
                                    })
                                }
                            </select>
                        </div>
                        <br />
                        <div style={{ 'width': '150', 'height': '150px' }}>
                            <img width={'150px'} src={imgCircuito(img)} alt="carta di credito" />
                        </div>

                        {img != 'PayPal' && img != 'BitCoin' ? <div className="payment">
                            <div className="d-flex">
                                <div>
                                    <label htmlFor="">Numero Carta</label><br />
                                    <input type='number' placeholder="---- ---- ---- ----" defaultValue={userEx == true ? user.numeroCarta : ''} onChange={((ele) => {
                                        setNumeroCarta(ele.target.value)
                                    })}></input>
                                </div>
                                <div>
                                    <label htmlFor="">Intestatario Carta</label><br />
                                    <input type='text' placeholder="Nome Cognome" defaultValue={userEx == true ? user.intestatarioCarta : ''}  onChange={((ele) => {
                                        setIntestatarioCarta(ele.target.value)
                                    })}></input><br />
                                </div>
                            </div>

                            <div className="d-flex flex-wrap-wrap">
                                <div>
                                    <label htmlFor="">Data Scadenza</label><br />
                                    <input type='data' placeholder="01/12"  defaultValue={userEx == true ? user.scadenzaCarta : ''} onChange={((ele) => {
                                        setScadenzaCarta(ele.target.value)
                                    })}></input>
                                </div>
                                <div>
                                    <label htmlFor="">CVV</label><br />
                                    <input type='text' placeholder="---"   onChange={((ele) => {
                                        setCVV(ele.target.value)
                                    })}></input>
                                </div>
                            </div>
                        </div> : img != 'BitCoin' ? <div><div>
                            <label htmlFor="">Email</label><br />
                            <input type='email' placeholder="nickname@gmail.com" onChange={((ele) => {
                                setUsernamePayPal(ele.target.value)
                            })}></input>
                        </div><div>
                                <label htmlFor="">Password</label><br />
                                <input type='password' onChange={((ele) => {
                                    setPassword(ele.target.value)
                                })}></input><br />
                            </div></div> : <div><div>
                                <label htmlFor="">Email</label><br />
                                <input type='email' placeholder="nickname@gmail.com" onChange={((ele) => {
                                    setUsernameBitCoin(ele.target.value)
                                })}></input>
                            </div><div>
                                <label htmlFor="">Password</label><br />
                                <input type='password' onChange={((ele) => {
                                    setPassword(ele.target.value)
                                })}></input><br />
                            </div>

                        </div>}

                    </section> : ''
                    }
                </div>

                <div className="d-flex flex-column align-items-center" style={{ 'marginTop': '25px' }}>
                    <div className="mb-3">
                        <Link to={`/Cart`}><button className="btn btn-dark" onClick={(() => {
                            console.log(arrayCarrello.carrello.arrayFatture)
                            arrayCarrello.carrello.AnagraficaUser = arrayPagamentoAnagrafica
                            arrayCarrello.carrello.arrayMethodPagamento = arrayMethodPagamento
                            arrayFatture = { arrayPagamentoAnagrafica, arrayMethodPagamento, carrello, tot}
                            arrayCarrello.carrello.arrayFatture.push(arrayFatture)
                        })}><Link className="text-white" style={{ 'textDecoration': 'none' }} to={`/Cart/checkOut/ricevuta`}>CheckOut</Link></button></Link>
                    </div>

                    <div>
                        <span className="text-danger">{error}</span>
                    </div>

                </div>
            </main> : <div className="loginForm login">

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" required autoComplete="Username" autoFocus placeholder="Inserisci Username" onChange={((ele) => {
                            setEmail(ele.target.value)

                        })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required autoComplete="current-password" placeholder="Password" onChange={((ele) => {
                            setPassword(ele.target.value)
                        })} />

                    </div>
                    <div className="text-center">
                        <button className="btn btn-dark" onClick={() => {
                            user.email === email && user.password === password ? setLog(false)   : setLog(true)
                            setUserEx(true)
                        }}>Login In</button>
                        
                    </div>
                   <span className="text-danger">{error}</span>  

            </div>}
        </div>

    </div>
    </div>
   
    
}

export default Cart
