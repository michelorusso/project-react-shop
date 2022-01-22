import React, { Component, useState } from "react";
import {
    BrowserRouter,
    Link,
    Routes,
    Route
} from 'react-router-dom';

import { store } from '../store';
import { useDispatch, useSelector } from "react-redux";

import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import logo from '../img/logo_small.png'
import Header from "./header";


export const Cart = () => {
    const arrayCarrello = store.getState();
    const pagamento :any= arrayCarrello.carrello.AnagraficaUser
    const methodPay :any= arrayCarrello.carrello.arrayMethodPagamento
    const [circuito, setCircuito] = useState('')
    const dispatch = useDispatch();

    let cart: any = [];
    for (var i = 1; i < arrayCarrello.carrello.carrello.length; i++) {
        cart.push(arrayCarrello.carrello.carrello[i])
    }




    // funzioni e variabili per il file pdf
    var currentTime: any = new Date;
    var dd = String(currentTime.getDate()).padStart(2, '0');
    var mm = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentTime.getFullYear();

    let [nFact, setNFact] = useState(1)

    currentTime = dd + '/' + mm + '/' + yyyy;
    console.log(currentTime)

    //funzione che si occupa di creare file pdf
    const pdfGenerate = (): any => {

        var doc: any = new jsPDF();
        doc.addImage(logo, 'PNG', 10, 8, 40, 20);
        doc.lines([[50 - 200, 1 - 1]], 180, 35, [1, 10] || "S")
        doc.setFontSize(10)
        doc.text(180, 8, `${currentTime}`);
        doc.text(186, 13, `N. ${nFact++}/22`);
        doc.setFontSize(12)
        doc.text(15, 45, `SPETT.LE`)
        doc.setFontSize(10)
        doc.text(15, 50, `${pagamento.Name} ${pagamento.LastName}`);
        doc.text(15, 55, `${pagamento.andress}`)
        doc.text(15, 60, `${pagamento.zip} ${pagamento.citta.toUpperCase()} - IT`)
        doc.text(15, 65, `02 000002222`);
        doc.setTextColor(30, 144, 255);
        doc.text(15, 70, `${pagamento.email}`);
        doc.setTextColor(0, 0, 0);
        doc.text(15, 75, `Partita IVA 0123456789`);
        doc.setFontSize(12)
        doc.setTextColor(153, 0, 0);
        doc.text(140, 45, `I-REACTSHOP SPA`)
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10)
        doc.text(140, 50, `Michele & Gabriele`);
        doc.text(140, 55, `Mountain View Elementary`)
        doc.text(140, 60, `2547 SILICON VALLEY - CALIFORNIA`)
        doc.text(140, 65, `35 111555555`);
        doc.setTextColor(30, 144, 255);
        doc.text(140, 70, `infoIreactShop@gmail.com`);

        doc.autoTable({
            headStyles: { fillColor: [153, 0, 0] },
            margin: { top: 85 },
            head: [['Descrizione', 'Q.tà', 'Prezzo', 'TOTALE']],
            body: [
                [`${cart[0].NameProduct} - ${cart[0].Description}`, cart[0].QuantitySelected, cart[0].Price],
                [`${cart[1].NameProduct} - ${cart[1].Description}`, cart[1].QuantitySelected, cart[1].Price],
                [``, '', '', ''],
                [``, '', '', ''],
                [``, '', '', ''],
                [``, '', '', ''],
                [``, '', '', cart[0].Price * cart[0].QuantitySelected + ' €'],
                // ...
            ],
        })
        doc.setTextColor(0, 0, 0);
        doc.text(15, 160, `Intestatario Carta: ${methodPay.intestatarioCarta}`)
        doc.text(15,165 , `Modalità di Pagamento: ${methodPay.circuito}`)
        doc.text(15, 170, 'IT XXXXXXXXXXXXXXXX5489')
        

        
        doc.save('fattura.pdf')
    }

    console.log(circuito)
    return <div>
<Header />
 <div className="ricevuta">
        <div className="container">
            <h1>Grazie per l'acquisto {pagamento.Name} {pagamento.LastName}</h1>
            <div>Il suo pacco verra spedito in via: <b>{`${pagamento.andress},${pagamento.citta},${pagamento.state}`}</b></div>
            <div>Riceverà una fattura al suo indirizzo mail: <b>{pagamento.email}</b> </div>
            <div>Metodo di pagamento: <b>{methodPay.intestatarioCarta == '' && methodPay.numeroCarta == '' ? 'Pagamento alla Consegna' : methodPay.circuito}</b></div>            <div>Qui sotto puo trovare un riepilogo del suo ordine:</div>
            <div className="d-flex justify-content-between">

                <div className="containerElementCart">
                    <h5>Riepilogo Ordine</h5>
                    {
                        cart.map((element: any, index: number) => {
                            return element.Price != 0 ? <div className="d-flex mb-2">
                                <img width={'80px'} src={element.Thumb} alt="" />
                                <div key={index} className="objElementCard">
                                    <div className="textElementCart ml-3">
                                        <div className=''>{element.Marca}</div>
                                        <div>{element.NameProduct} </div>
                                        <div className="d-flex align-items-center">
                                            <span>Colore Scelto: </span>
                                            <span className="colorProduct" style={{ 'backgroundColor': `${element.ColorSelected}` }}></span>
                                        </div>
                                    </div>
                                    <div className="changeProductQT">
                                        <div>Size: {element.SizeSelected}</div>
                                        <div>Q.tà: {element.QuantitySelected}</div>
                                    </div>
                                    <div className="px-2">{element.Price * element.QuantitySelected}$</div>
                                </div>
                                <hr />
                            </div> : ''
                        })
                    }
                </div>
                <div className='totalCart ' style={{ 'width': '500px' }}>
                    <div className="d-flex justify-content-between">
                        <span >
                            <div >IVA 21%</div>
                            <div >3-4 Giorni per la Spedizione</div>
                            {methodPay.bitcoin != true ? '' : `(+3% commissioni BitCoin)`}
                        </span>
                        <span >
                            <div><b>TOTALE</b></div><br />
                            <div>{methodPay.bitcoin == true ? (((pagamento.totale * 3) / 100) + (pagamento.totale)).toFixed(2) : (pagamento.totale).toFixed(2)}€</div>

                        </span>
                    </div>

                    <div className="text-center" style={{ 'marginTop': '60px' }}><button className="btn btn-dark" onClick={pdfGenerate}>Visualizza Fattura</button></div>
                </div>

            </div>

        </div>
    </div>
        </div>
        
       
    
}

export default Cart
