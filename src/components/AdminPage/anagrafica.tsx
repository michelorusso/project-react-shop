import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fotoCv from "../../img/fotoCv.jpeg"
import micheleFoto from "../../img/mik.jpg"
export const Anagrafica = () => {

    const Master = useSelector((state: any) => state.UserSelected);

    const arrayAdminUser = [
        {
            userName:'KenKaneki131099',
            nome:'Gabriele',
            cognome:'Sanna',
            email:'gabrisanna131099@gmail.com',
            password:'12345',
            luogoNascita:'Sassari',
            indirizzo:'Via montello 5, Sassari, Italia',
            numeroCell:'3486558084',
            imgThumb:fotoCv,
            matrVendittore:'gbrlsnnSS131099'
        },
        {
            userName:'Naofumi201095',
            nome:'Michele',
            cognome:'Lorusso',
            email:'miky-l@hotmail.com',
            password:'123456',
            luogoNascita:'Gravina',
            indirizzo:'Via Silvio Pellico 41, Gravina in Puglia, Italia',
            numeroCell:'3807654276',
            imgThumb:micheleFoto,
            matrVendittore:'mchlrss201095',
        }
    ]
    return <div className="anagrafica">
            <div>
                <img width={'200px'} src={arrayAdminUser[Master].imgThumb} alt="" />
                <br />
                <br />

                <div>
                    <button className="btn btn-dark">Logout</button>
                </div>
            </div>
            <div className="anagraficaPage">
                <div>
                    <label htmlFor="">UserName:</label>
                    <h5>{arrayAdminUser[Master].userName}</h5>
                </div>
                <div>
                    <label htmlFor="">Nome e Cognome:</label>
                    <h5>{`${arrayAdminUser[Master].nome} ${arrayAdminUser[Master].cognome}`}</h5>
                </div>
                <div>
                    <label htmlFor="">E-mail:</label>
                    <h5>{arrayAdminUser[Master].email}</h5>
                </div>
                <div>
                    <label htmlFor="">Indirizzo:</label>
                    <h5>{arrayAdminUser[Master].indirizzo}</h5>
                </div>
                <div>
                    <label htmlFor="">Numero Cell:</label>
                    <h5>{arrayAdminUser[Master].numeroCell}</h5>
                </div>
            
        </div>  
    </div>
}
export default Anagrafica;

function dispatch(arg0: { type: string; log: boolean; }) {
    throw new Error("Function not implemented.");
}
