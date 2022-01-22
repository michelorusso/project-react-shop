import React, { useState } from "react";
import { store } from '../../store';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import imgUser from '../../img/logo_small_icon_only_inverted.png'
import { useDispatch } from "react-redux";

type filter = {
    numero: number
}
export const Ordine = ({ numero }: filter) => {
    const arrayMagazine = store.getState();
    const dispatch = useDispatch();
    const [deleteSure, setDeleteSure] = useState(false);
    const [id, setId] = useState(0);
    var treaking = ''

    function stampaDettagliFattura(element: any, index: any, treaking: string, carrello: any) {
        return (
            <div className="dettagliFattura" style={{ 'background': 'white' }}>
                <button className="btn btn-dark" onClick={(() => {
                    setDeleteSure(false)
                })}>Chiudi</button>
                <div className="descriziioneFattura">
                    <div>
                        <h5>Nome Cliente:</h5>
                        <label htmlFor="">
                            {element[index].arrayPagamentoAnagrafica.Name + ' ' + element[index].arrayPagamentoAnagrafica.LastName}
                        </label>
                    </div>
                    <div>
                        <h5>Email:</h5>
                        <label htmlFor="">
                            {element[index].arrayPagamentoAnagrafica.email}
                        </label>
                    </div>
                    <div>
                        <h5>Cap:</h5>
                        <label htmlFor="">
                            {element[index].arrayPagamentoAnagrafica.zip}
                        </label>
                    </div>
                    <div>
                        <h5>Indirizzo:</h5>
                        <label htmlFor="">
                            {element[index].arrayPagamentoAnagrafica.andress + ', ' + element[index].arrayPagamentoAnagrafica.citta}
                        </label>
                    </div>
                    <div>
                        <h5>Metodo di Pagamento:</h5>
                        <label htmlFor="">
                            {element[index].arrayMethodPagamento.circuito}
                        </label>
                    </div>
                    <div>
                        <h5>Intestatario:</h5>
                        <label htmlFor="">
                            {element[index].arrayMethodPagamento.intestatarioCarta != '' ? element[index].arrayMethodPagamento.intestatarioCarta : element[index].arrayMethodPagamento.usernamePayPal}
                        </label>
                    </div>
                    <div>
                        <h5>Cod Tracking:</h5>
                        <label htmlFor="">
                            {treaking}
                        </label>
                    </div>
                    <div>
                        <h5>Corriere</h5>
                        <label htmlFor="">
                            <a style={{ 'color': 'black' }} href="https://www.rintraccialamiaspedizione.it/tracking-brt" target={'_blank'}>Bartolinbi</a>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-between">
                        <h5>Id:</h5>
                        <h5>Descrizione:</h5>
                        <h5 style={{ 'minWidth': '100px' }}>Dettagli:</h5>
                    </div>
                    <div>
                        {
                            carrello.map((ele: any) => {
                               
                               
                                 return ele.CodeProd != 0 ? <div className="position-relative">
                                    <div className="elementiOrdinatiInfo">
                                        {/* <img width={'80px'} src={ele.Thumb} alt="" /> */console.log(ele)} 
                                        <div className="">
                                            {ele.CodeProd}
                                        </div>
                                        <div className="texteleCart ml-3">
                                            <div className=''>{ele.Marca}</div>
                                            <div>{ele.NameProduct} </div>
                                        </div>
                                        <div className="changeProductQT">
                                            <div>

                                                <div>Taglia: {ele.SizeSelected}</div>

                                                <div>Quantita:
                                                    <span>{ele.QuantitySelected}</span>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <span>Colore Scelto: </span>
                                                    <span className="colorProduct" style={{ 'backgroundColor': `${ele.ColorSelected}` }}></span>
                                                </div>


                                            </div>

                                            <span>Prezzo: {ele.Price} x {ele.QuantitySelected}</span>
                                        </div>

                                    </div>
                                    <hr />

                                </div> : ''
                            })
                        }
                    </div>
                </div>
                <div>
                    <h6>Totale:</h6>
                    <div>{element[index].arrayMethodPagamento.Totale}$</div>
                </div>
            </div>
        )
    }
    function codTacking(element: any) {
        var now: any = new Date();
        var timestamp: any
        timestamp = now.getFullYear().toString(); // 2011
        timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString();
        timestamp += (now.getMonth < 9 ? '0' : '') + now.getHours().toString();
        timestamp += (now.getMonth < 9 ? '0' : '') + now.getMinutes().toString();
        timestamp += (now.getMonth < 9 ? '0' : '') + now.getSeconds().toString();
        timestamp += (now.getMonth < 9 ? '0' : '') + now.getMilliseconds().toString();
        timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString(); // pad with a 0
        return element.arrayPagamentoAnagrafica.email + timestamp
    }
    return <div className="containerOrdini">
        <a id="confirm"></a>
        {arrayMagazine.carrello.arrayFatture.map((element: any, index: number) => {
            var nProd = 0
            var prezzo = 0

            for (let i = 1; i < element.carrello.length; i++) {
                prezzo = element.carrello[i].Size.map((ele: any) => {
                    if (ele.Count > 0) {
                        prezzo += element.carrello[i].Price * ele.Count
                        nProd+= ele.Count
                    }
                })
            
            }

            return (element.arrayMethodPagamento.Totale != 0 ? <div key={index} style={{ 'width': '300px', 'borderRadius': '10px' }} className=" p-3 m-2 sfondoClienteOrdine">
                <div ></div>
                <div className="p-4 m-auto">
                    <img className="App-logo" src={imgUser} alt="imgUser" />
                </div>
                <div className="m-auto">
                    <a >{element.arrayPagamentoAnagrafica.Name + ' ' + element.arrayPagamentoAnagrafica.LastName}</a>
                </div>
                <a className="m-auto " href="#confirm"><button className="btn btn-danger mb-3" onClick={() => {
                    setDeleteSure(true);
                    setId(index)
                }}>Dettagli</button></a>
                <div className="d-flex  justify-content-around">
                    <div>
                        <h5 >Articoli</h5>
                        <p>{nProd}</p>
                    </div>
                    <div>
                        <h5>Spesa Tot </h5>
                        <p>{element.tot}$</p>
                    </div>
                    <div>
                        <h5 >Circuito </h5>
                        <p >{element.arrayMethodPagamento.circuito}</p>
                    </div>
                </div>

                <div className="p-2 tracking" style={{ 'textAlign': 'center' }}>
                    <h5>Tracking</h5>
                    <a href="https://www.rintraccialamiaspedizione.it/tracking-brt" target={'_blank'}>Guarda stato Consegna</a>
                    <p style={{ 'wordBreak': 'break-word', 'height': '100px' }}>{treaking = codTacking(element)}</p>
                </div>

            </div> : '')
        })}
        {deleteSure ? stampaDettagliFattura(arrayMagazine.carrello.arrayFatture, id, treaking, arrayMagazine.carrello.carrello) : ''}
    </div>
}
export default Ordine;