
import React, { Component, useEffect, useState } from "react";

import { store } from '../store';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Header from './header'
import { useDispatch, useSelector } from "react-redux";



type filter = {
    numero: number
}
export const Card = ({ numero }: filter) => {
    const arrayCarrello = store.getState();
    const [quantity, setQuantity] = useState(0)
    const [ColorSelected, setColorSelected] = useState('')

    const [sizeSelected, setSizeSelected] = useState('XS' || 36);
    const [quantitaMagazzino, setquantitaMagazzino] = useState(0);
    const arrayMagazine = store.getState();

    let maga: any = localStorage.getItem('magazine')
    let newMagazine = JSON.parse(maga)

    const [magazin, setMagazine]: any = useState(newMagazine == null ? arrayMagazine.readmagazine.magazine : newMagazine);

    const dispatch = useDispatch();

    var magazzino = magazin[numero];
console.log(magazzino)
    var arrayTemp: any = magazzino;
    var typeAbiti: any = ['XS', 'S', 'M', 'L', 'XL']
    var typeScarpe: any = [36, 38, 40, 42, 44]
    let [taglie, setTaglie] = useState(arrayTemp.TypeProduct != 'Scarpe' ? typeAbiti : typeScarpe)

    const [outofStock, setoutofStock] = useState(``);
    const [selected, setSelected] = useState(0);

    function promo(marca: string) {


        let sconto = 0
        switch (marca) {
            case 'Adidas':
                sconto = 20
                break;
            case 'Tommy Hilfiger':
                sconto = 25
                break;
            case 'Nike Sportswear':
                sconto = 10
                break;
            case 'Nike Performance':
                sconto = 10
                break;
            case 'Nike':
                sconto = 15
                break;
            case 'North Sails':
                sconto = 30
                break;
            case '':
                sconto = 5
                break;

            default:
                break;
        }
        return sconto

    }


    function stampaCard(element: any, index: any) {

        return <>
            <div className="col-lg-3 col-md-6 col-xs-11 mb-4 mb-lg-0 pl-0">
                <Link className="moodText" to={`/card/${element.Id}`} onClick={() => {
                    dispatch({
                        type: 'PROD_SELECTED',
                        number: element.Id
                    });
                }}>

                    <div className="card rounded shadow-sm border-0 ">
                        <div className="card-body p-4 moodText">
                            {element.Promo ? <span className="promoText">{element.Promo ? promo(element.Marca) + '%' : ''}</span> : ''}
                            {element.Materials.includes('cotone') ? <span className="sostenibile">Sostenibile</span> : ''}
                            <img height={'300px'} src={element.Thumb} alt={element.Description} className="img-fluid d-block mx-auto mb-3"></img>
                            <h5> <a href="#" className="text-dark">{element.NameProduct}</a></h5>
                            <div className="small text-muted font-italic text-dark">{element.Description}</div>
                            <ul className="list-inline small d-flex flex-column text-dark infoCard">
                                <li className="list-inline-item m-0 text-dark">{star(element.Rate)}</li>
                                <li className="list-inline-item m-0 text-dark">{element.Promo ? parseFloat(element.Price - promo(element.Marca) * element.Price / 100 + '$').toFixed(2) : element.Price + '$'} {element.Promo ? <span className="scontato">{element.Price}$ </span> : ''}</li>
                                {
                                    element.gender.includes('Uomo') && element.gender.includes('Donna') ? <li className="list-inline-item m-0 text-dark">Unisex</li> : <li className="list-inline-item m-0 text-dark">{element.gender}</li>
                                }
                                <li className="list-inline-item m-0 text-dark"><i className="fa fa-star-o text-success">{element.Shipment}</i></li>
                            </ul>
                        </div>
                    </div>

                </Link>
            </div>
        </>
    }
    function star(rate: number): any {
        let stampa: any = []
        for (let i = 0; i < rate; i++) {
            stampa.push(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>)
        }
        return stampa
    }


    return <div>
        <Header />
        <div className="container singleCard">
            <aside className="">
                {/* cambia solo il nome della cartella tramite il magazzino Id, i nomi delle img devono essere uguali in ogni cartella  */}
                <img className="imgClothes" src={` https:www.nativiamericani.com/id${magazzino.Id}/fr1.jpg`} alt="" />
                <img className="imgClothes" src={` https:www.nativiamericani.com/id${magazzino.Id}/fr2.jpg`} alt="" />
                <img className="imgClothes" src={` https:www.nativiamericani.com/id${magazzino.Id}/fr3.jpg`} alt="" />
                <img className="imgClothes" src={` https:www.nativiamericani.com/id${magazzino.Id}/rt.jpg`} alt="" />
                <img className="imgClothes" src={` https:www.nativiamericani.com/id${magazzino.Id}/fr4.jpg`} alt="" />


            </aside>
            <section>
                {magazzino.Promo ? <span className="promoText">{magazzino.Promo ? promo(magazzino.Marca) + '%' : ''}</span> : ''}
                {magazzino.Materials.includes('cotone') ? <span className="sostenibile">Sostenibile</span> : ''}

                <img className="imgClothesBig" src={magazzino.Thumb}></img>
            </section>
            <main className="allInfoClothes">
                <h2>{magazzino.NameProduct}</h2>
                <p>{magazzino.Description}</p>
                <h2>{magazzino.Price}$ <span className="iva">- IVA inclusa</span></h2>
                <h1>{star(magazzino.Rate)}</h1>
                <h5>{magazzino.TypeProduct}</h5>
                <label htmlFor="">{magazzino.gender}</label>
                <div>
                    <div className="colorClothes">Colori Disponibili:
                        {magazzino.Color.map((chiave: any, i: any) => {
                            return (
                                <button className="colorProduct" value={chiave} style={{ 'backgroundColor': chiave }} key={i} onClick={(ele: any) => {
                                    setColorSelected(ele.target.value)
                                }}></button>
                            );
                        })}
                    </div>

                    <div className="SizeClothes">
                        <span>Taglie:</span>
                        <select name="" id='' onChange={(s: any) => {
                            setSizeSelected(s.target.value)
                            setquantitaMagazzino(magazzino.Size[selected].Quantity)
                            setoutofStock('')
                            switch (s.target.value) {
                                case 'XS' || 36:
                                    return setSelected(0)
                                    break;
                                case 'S' || 38:
                                    return setSelected(1)
                                    break;
                                case 'M' || 40:
                                    return setSelected(2)
                                    break;
                                case 'L' || 42:
                                    return setSelected(3)
                                    break;
                                case 'XL' || 44:
                                    return setSelected(4)
                                    break;
                                default:
                                    break;
                            }

                        }}>
                            {taglie.map((chiave: any, i: any) => {
                                return (
                                    <option value={chiave} key={i}>{chiave}</option>
                                );
                            })}
                        </select>

                    </div>
                    <div>
                        <label htmlFor="">Q.tà: </label>
                        <input style={{ 'width': '40px', 'marginTop': '15px' }} type="number" min={1} max={magazzino.Size[selected].Quantity} value={quantity} onChange={((ele: any) => {
                            setQuantity(parseInt(ele.target.value));
                            setquantitaMagazzino(arrayTemp.Size[selected].Quantity)
                        })} />
                    </div>
                    <div>

                    </div>
                    <span className="text-danger">{outofStock}</span>
                    <div>
                        <button className="buttonAdd" onClick={() => {
                            if (arrayTemp.Size[selected].Quantity > 0 && arrayTemp.Size[selected].Count >= 0) {
                                setoutofStock(`Salvato nel carrello`)
                                magazzino.Size[selected].Quantity = quantitaMagazzino
                                arrayTemp.Size[selected].Quantity = quantitaMagazzino - quantity
                                arrayTemp.Size[selected].Count = quantity
                                arrayTemp.SizeSelected = sizeSelected
                                arrayTemp.QuantityDecurted = quantitaMagazzino
                                arrayTemp.QuantitySelected = quantity
                                arrayTemp.ColorSelected = ColorSelected
                                arrayTemp.Id = arrayCarrello.carrello.carrello.length - 1
                                var newstate: any = [];
                                for (var i = 1; i < arrayCarrello.carrello.carrello.length; i++) {
                                    newstate.push(arrayCarrello.carrello.carrello[i]);
                                }


                                localStorage.setItem('carrello', JSON.stringify(newstate));

                                dispatch({
                                    type: 'ADD_CART',
                                    addtoCart: arrayTemp,
                                });

                            } else {
                                setoutofStock(`Il prodotto taglia: ${sizeSelected} è esaurito`)
                                setQuantity(1)
                            }
                        }}>Aggiungi al Carrello</button>
                    </div>
                    <div className="specifiche">
                        <div>
                            <svg className="zds-icon RC794g X9n9TI DlJ4rT pVrzNP H3jvU7" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-labelledby="truck-fast-446845" role="img" aria-hidden="false">
                                <title id="truck-fast-446845">truck-fast</title>
                                <path d="M2.231 8.25h2.282a.75.75 0 0 0 0-1.5H2.231a.75.75 0 0 0 0 1.5zM4.497 11.25a.75.75 0 0 0 0-1.5H.753a.75.75 0 0 0 0 1.5H4.497zM4.513 14.251a.75.75 0 0 0 0-1.5H2.21a.75.75 0 0 0 0 1.5h2.303z">
                                </path>
                                <path d="m23.81 11.501-3.368-3.738a.754.754 0 0 0-.557-.248h-3.378V4.497a.75.75 0 0 0-.75-.75H3.711a.75.75 0 0 0 0 1.5l11.298-.004.003 10.513-4.953.004c-.519-.897-1.478-1.508-2.588-1.508s-2.07.61-2.588 1.508H3.712a.75.75 0 1 0 0 1.5h.76a2.999 2.999 0 0 0 5.998 0h5.276l.76.003a2.999 2.999 0 0 0 5.997 0h.749a.75.75 0 0 0 .75-.75v-4.51a.751.751 0 0 0-.193-.502zm-16.338 7.25a1.5 1.5 0 1 1 0-2.999 1.5 1.5 0 0 1 0 2.999zm12.032 0a1.5 1.5 0 1 1 0-2.999 1.5 1.5 0 0 1 0 2.999zm2.998-2.988h-.408a2.987 2.987 0 0 0-2.59-1.511 2.987 2.987 0 0 0-2.59 1.511h-.402l-.003-6.748h3.042l2.95 3.278v3.47z">
                                </path>
                            </svg>
                            <span>{magazzino.Shipment}</span>
                        </div>
                        <div>
                            <svg className="zds-icon RC794g X9n9TI DlJ4rT PO9Fsd pVrzNP H3jvU7" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-labelledby="box-transit-446847" role="img" aria-hidden="false"><title id="box-transit-446847">box-transit</title><path d="m16.5 14.5-4.2-1.9c-.2-.1-.4-.1-.6 0l-4.2 1.9V6.9l2-5.6h5l2 5.9v7.3zM9 7.3v4.9l2.1-.9c.6-.3 1.2-.3 1.8 0l2.1.9V7.3l-1.6-4.5h-2.9L9 7.3z"></path><path d="M20.5 22.8h-17c-1.2 0-2.2-1-2.2-2.2V19c0-.4.3-.8.8-.8s.8.3.8.8v1.5c0 .4.3.8.8.8h17c.4 0 .8-.3.8-.8V7.3c0-.1 0-.2-.1-.3l-1.5-3.8c-.1-.3-.4-.5-.7-.5H5c-.3 0-.6.2-.7.5L2.8 7c0 .1-.1.2-.1.3V10c0 .4-.3.8-.8.8s-.7-.4-.7-.8V7.3c0-.3.1-.6.2-.8l1.5-3.8c.4-.9 1.2-1.5 2.1-1.5h14c.9 0 1.7.6 2.1 1.4l1.5 3.8c.1.3.2.5.2.8v13.2c0 1.3-1.1 2.4-2.3 2.4z"></path><path d="M2 7h20v1.5H2zM4.8 13.8h-4c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h4c.4 0 .8.3.8.8s-.4.8-.8.8zM4.8 16.8h-4c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h4c.4 0 .8.3.8.8-.1.4-.4.8-.8.8z"></path></svg>
                            <span> Spedizione e reso gratuiti</span>
                        </div>
                        <div>
                            <svg className="zds-icon RC794g X9n9TI DlJ4rT PO9Fsd pVrzNP H3jvU7" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-labelledby="returns-446848" role="img" aria-hidden="false"><title id="returns-446848">returns</title><path d="M14.25 4.33H1.939l3.056-3.055A.75.75 0 0 0 3.934.215L.658 3.49a2.252 2.252 0 0 0 0 3.182l3.276 3.275a.75.75 0 0 0 1.06-1.06L1.94 5.83h12.31c4.557 0 8.251 3.694 8.251 8.25S18.806 22.5 14.25 22.5h-12a.75.75 0 0 0 0 1.5h12c5.385 0 9.75-4.534 9.75-9.919s-4.365-9.75-9.75-9.75z"></path></svg>
                            <span>100 giorni per restituire il tuo ordine *</span>
                        </div>
                    </div>
                </div>
            </main>

        </div>
        <div className="container">
            <h2>Correlati per {magazzino.gender}</h2>
            <div className="containerCardsClothes ">
                {arrayMagazine.readmagazine.magazine.map((element, index) => {
                    return (element.gender.includes(magazzino.gender) == true ? stampaCard(element, index) : '');
                })}
            </div>
            <h2>Correlati per {magazzino.NameProduct}</h2>
            <div className="containerCardsClothes ">
                {arrayMagazine.readmagazine.magazine.map((element, index) => {
                    return (element.NameProduct.includes(magazzino.NameProduct) ? stampaCard(element, index) : '');
                })}
            </div>
            <h2>Correlati per {magazzino.TypeProduct}</h2>
            <div className="containerCardsClothes ">
                {arrayMagazine.readmagazine.magazine.map((element, index) => {
                    return (element.TypeProduct == magazzino.TypeProduct ? stampaCard(element, index) : '');
                })}
            </div>
        </div>
    </div>

}
export default Card