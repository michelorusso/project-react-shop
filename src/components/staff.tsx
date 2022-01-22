import React, { Component, useState } from "react";

import bg from "../img/bg-slider.jpg"
import bgChisiamo from "../img/Wallp1.jpg"
import Mick from "../img/mik.jpg"
import bgStaff from "../img/bg-staff.jpg"
import { Carousel } from "react-bootstrap";
import gabImg from "../img/fotoCv.jpeg"


import Header from "./header";
export const Staff = () => {
    return <div>
        <Header />
        <Carousel style={{'backgroundColor': 'black'}}>

    
<Carousel.Item>
    <img
    className="d-block w-100"
    src={bg}
    alt="First slide"
    style={{'height' : '100vh'}}
    />
    <Carousel.Caption>
    <h5 className="text-white">QUESTA E' UNA STORIA DI</h5>
    <span>_________________</span>
    <p style={{'fontFamily': 'Licorice', 'fontSize': '40px'}}>Crescita, Passione e Innovazione</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src={bgChisiamo}
    alt="Second slide"
    style={{'height' : '100vh'}}
    />
    <Carousel.Caption style={{'textAlign': 'center', 'bottom': '5.25rem','backgroundColor':' rgba(255,255,255,0.7)'}}>
    <h3 style={{'fontSize': '40px'}} className="text-black">CHI SIAMO</h3>
    <p style={{'fontFamily': 'Vujahday Script', 'fontSize': '40px'}} className="text-black">Ti diamo il benvenuto su I-ReactShop.
        La nostra missione è quella di offrire una vasta selezione di prodotti con il miglior rapporto tra qualità e prezzo. Non saremmo qui se non fosse per i nostri clienti, per questo negli anni abbiamo costruito un customer service d’eccellenza per rispondere prontamente a tutte le tue esigenze. 
        La cura e la passione che mettiamo tutti i giorni in questo lavoro ci permettono di seguire sempre da vicino le ultime tendenze in fatto di prodotti di qualità: qui su I-ReactShop potrai trovare e scoprire tutte le novità nel campo della moda. </p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item className="position-relative">
    <img
    className="d-block w-100"
    src={bgStaff}
    alt="Third slide"
    style={{'height' : '100vh'}}
    />
    <Carousel.Caption className="text-black position-absolute top-0 staffStyle" style={{'overflow': 'hidden'}}>
    <h3>LO STAFF</h3>
    <div style={{ 'padding': '20px'}} className="d-flex">
        <div style={{'width': '50%'}}>
            <img style={{'width': '30%'}} className="shadow bg-body rounded" src={Mick} alt="michelelorusso" />

            <div className="p-3">
                <h3>Michele Lorusso</h3>

                <div className="text-start staff">
                    <h5 className="text-dark">Ruolo Svolto nel progetto:</h5>
                    <p>
                        Gestione degli stati con Redux...
                    </p>
                    <h5 className="text-dark">Bio</h5>
                    <p className="fs-6">Sono uno studente universitario e un lavoratore con diverse passioni, che vanno dallo sport alla tecnologia. <br />
                        Amo il Calcio come leggere libri e/o passare ore ai VideoGames, appassionato di Cinema ed interessato alle Intelligenze Artificiali, curioso del mondo informatico per le sue infinite possibilità.</p>
                    
                    <div><b><i className="fas fa-envelope"></i></b> <a className="text-dark text-decoration-none" href="mailto:miky-l@hotmail.it">miky-l@hotmail.it</a></div>
                    <div><b><i className="fab fa-github"></i></b> <a className="text-dark text-decoration-none" href="https://github.com/michelorusso" target="_blank">github.com/michelorusso</a></div>
                    <div><b><i className="fab fa-linkedin"></i></b> <a className="text-dark text-decoration-none" href="https://www.linkedin.com/in/michele-lorusso-585832141/" target="_blank">linkedin.com/in/michele-lorusso</a></div>
                </div>
            </div>
            
            
        </div>
        <div style={{'width': '50%'}}>
        <img style={{'width': '30%'}} className="shadow bg-body rounded" src={gabImg} alt='' />

            <div className="p-3">
                <h3 >Gabriele Sanna</h3>

                <div className="text-start staff">
                    <h5 className="text-dark">Ruolo Svolto nel progetto;</h5>
                    <p>
                        Gestione della Grafica...  
                    </p>
                    <h5 className="text-dark">Bio</h5>
                    <p className="fs-6">Da sempre il mondo dell'informatica mi incuriosisce, ma in questi ultimi anni ho sentito il bisogno di viverla e più studiavo e più mi appassionava. La possibilità di non rimanere fossilizzati su qualcosa e poter cambiare ambito di lavoro, non mi ha fatto mai annoiare, anzi mi ha incuriosito sempre di più.</p>
                    
                    <div><b><i className="fas fa-envelope"></i></b> <a className="text-dark text-decoration-none" href="mailto:gabiemail">gabrisanna131099@gmail.com</a></div>
                    <div><b><i className="fab fa-github"></i></b> <a className="text-dark text-decoration-none" href="" target="_blank">github.com/Gabriele131099</a></div>
                    <div><b><i className="fab fa-linkedin"></i></b> <a className="text-dark text-decoration-none" href="" target="_blank">linkedin.com/in/gabriele-s-13993513b</a></div>
                    </div>
            </div>

        </div>
    </div>
    </Carousel.Caption>
</Carousel.Item>
</Carousel>
    </div>
}

export default Staff;
