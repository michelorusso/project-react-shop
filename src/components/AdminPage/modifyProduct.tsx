import React from "react";
import { Link } from "react-router-dom";
import { store } from '../../store';
import fotoCv from "../../img/fotoCv.jpeg"
import micheleFoto from "../../img/mik.jpg"
import magazine from "../../reducers/readMagazine";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ModifyProduct = () => {


    const dispatch = useDispatch();
        
    let maga :any= localStorage.getItem('magazine')
    let newMagazine =  JSON.parse(maga)

    const Master = useSelector((state: any) => state.UserSelected);
    const arrayAdminUser = [
        {
            nome:'Gabriele',
            cognome:'Sanna',
        },
        {
            nome:'Michele',
            cognome:'Lorusso',
        }
    ]

    function star(rate: number): any {
        let stampa: any = []
        for (let i = 0; i < rate; i++) {
            stampa.push(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>)
        }
        return stampa
    }
    function stampaCard(element: any, index: any) {
        return <>
            <div key={index} className="col-lg-3 col-md-6 col-xs-11 mb-4 mb-lg-0 " >
            <Link className="moodText" to={`/AdminPage/modifica/${index}`} onClick={() => {
                dispatch({
                    type: 'PROD_SELECTED',
                    number: index
                });
                localStorage.setItem( 'numeroProdotto' , index);
            }}>
                <div className="card rounded shadow-sm border-0 "style={{'height':'649px'}}>
                    <div className="card-body p-4 moodText">
                        <img height={'300px'} src={element.Thumb} alt={element.Description} className="img-fluid d-block mx-auto mb-3"></img>
                        <h5> <a href="#" className="text-dark">{element.NameProduct}</a></h5>
                        <div className="small text-muted font-italic text-dark">{element.Description}</div>
                        <ul className="list-inline small d-flex flex-column text-dark infoCard">
                            <li className="list-inline-item m-0 text-dark">{star(element.Rate)}</li>
                            <li className="list-inline-item m-0 text-dark">{element.Price}$</li>
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

    return <div>

        <div className="adminPage d-flex container">
            <div className="containerCardsClothes container ">

                {
                    newMagazine.map((element :any, index :number) => {
                        return stampaCard(element, index)
                    })
                }
            </div>

        </div>
    </div>
}
export default ModifyProduct;