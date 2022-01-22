import { Console } from "console";
import React, { Component, HtmlHTMLAttributes, useState } from "react";
import { start } from "repl";
import Card from './card'
import { store } from '../store';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useDispatch } from "react-redux";
import SingleCard from './cardSingle'
import Header from './header'

export const Clothes = () => {


  const dispatch = useDispatch();


  const arrayMagazine = store.getState();

  let maga :any= localStorage.getItem('magazine')
  let newMagazine =  JSON.parse(maga)


  const [magazin , setMagazine]  :any = useState(newMagazine == null ? arrayMagazine.readmagazine.magazine : newMagazine);

return <div className="">
  <Header/>
    <section className="mt-4">
      <div className="firstJumbo">
        <div className="testoJumbo">
          <h1>
            La moda ad un click
          </h1>
          <h3>Tutte le tendenza a portata di tutti</h3>
          <div className="pt-4">
            <Link className="buttonGender" to={`/search`} onClick={(()=>{
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
            <Link className="buttonGender" to={`/search`} onClick={(()=>{
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
          </div>
        </div>
        <div className="imgJumbo">
          <img src="https://img01.ztat.net/banner/47dc7883de74452ab200243bd9dd6b4b/cb8306fa15a444abb2fc62678824001e.jpg" alt="" />
        </div>
      </div>
    </section>
    <section className="container">
      <h2>Promo</h2>
      <div className="containerCardsClothes container" style={{'height': '690px'}}>
        {magazin.map((element :any, index: number) => {
          return (element.Promo ? <SingleCard element={element} index={index}/>: '');
        })}
      </div>
    </section>
    <section className="mt-4">
      <div className="firstJumbo Tommy">
        <div className="testoJumbo ">
          <h1>
            La moda Tommy Hilfiger
          </h1>
          <h3>Tutte le tendenza a portata di tutti</h3>
          <div className="pt-2">
            <Link className="buttonGender" to={`/search`} onClick={(()=>{
                                 dispatch({
                                    type: 'MARCA',
                                    marca: 'Tommy Hilfiger',
                                });
                                dispatch({
                                  type: 'FILTER',
                                  Filtri: '',
                              });
                              dispatch({
                                type: 'FILTERTYPE',
                                filtriType:''
                            });
                            })}>
              Abbigliamento
            </Link>
            
          </div>
        </div>
        <div className="imgJumbo">
          <img src="https://images.milledcdn.com/2021-09-11/xdpCtRPu4mTjesmT/CdDGBJtrY3j_.jpeg" alt="" />
        </div>
      </div>
    </section>
    <div className="TommyContainer">
      <div className="containerCardsClothes container "style={{'height': '690px'}}>
        {magazin.map((element :any, index: number) => {
          return (element.NameProduct.includes('Tommy Hilfiger') ? <SingleCard element={element} index={index}/> : '');
        })}
      </div>
    </div>
    <section className="mt-4">
      <div className="firstJumbo AddidasShoes">
        <div className="testoJumbo ">
          <h1>
            La moda Adidas Scarpe
          </h1>
          <h3>Tutte le tendenza a portata di tutti</h3>
          <div className="pt-2">
            <Link className="buttonGender" to={`/`}>
              Scarpe
            </Link>

          </div>
        </div>
        <div className="imgJumbo">
          <img src="https://tech.meteoweek.com/wp-content/uploads/2021/12/Forum-Tech-Boost-Series-X-1.jpg" alt="" />
        </div>
      </div>
    </section>
    <div className="AddidasShoesContainer mb-2">
      <div className="containerCardsClothes container " style={{'height': '690px'}}>
        {magazin.map((element :any, index: number) => {
          return (element.Marca.includes('Adidas') ?<SingleCard element={element} index={index}/> : '');
        })}
      </div>
    </div>
  </div>
}

export default Clothes;