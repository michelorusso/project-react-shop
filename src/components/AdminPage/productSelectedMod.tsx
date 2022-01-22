import React, { Component, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { store } from "../../store";



type filter = {
    numero: number
}
export const ToModify = ({ numero }: filter) => {
    

    let maga :any= localStorage.getItem('magazine')
    let newMagazine =  JSON.parse(maga)
    
    const [newNumber, setNewNumber] = useState( numero )

    let qnt : any = []
    qnt = newMagazine[newNumber].Size.map((ele: any, i :number)=> {
        return ele.Quantity
    })


    const dispatch = useDispatch();

    const arrayMagazine = store.getState();

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

    const arrayGeneriAbbigliamento = [
        "Camicie",
        "Pantaloni",
        "Maglieria",
        "Jeans",
        "Giacche",
        "Cappotti",
        "T-shirt & Polo",
        "Pantaloni sportivi e Joggers",
        "Bermude",
        "Completi e cravatte",
        "Slip",
        "Boxer",
        "Calze",
        "Pigiami",
        "Tuta",
        "Funny",
        'Scarpe'
    ]

    const [Marca, setMarca] = useState(newMagazine[newNumber].Marca);
    const [NameProduct, setNameProduct] = useState(newMagazine[newNumber].NameProduct);
    const [Description, setDescription] = useState(newMagazine[newNumber].Description);
    const [TypeProduct, setTypeProduct] = useState(newMagazine[newNumber].TypeProduct);
    const [Thumb, setThumb] = useState(newMagazine[newNumber].Thumb);
    const [Gender, setGender] = useState(newMagazine[newNumber].gender);

    const [ImageA, setImageA] = useState('');
    const [ImageB, setImageB] = useState('');
    const [ImageC, setImageC] = useState('');
    const [ImageD, setImageD] = useState('');
    const [ImageE, setImageE] = useState('');

    const [Price, setPrice] = useState(newMagazine[newNumber].Price);

    const [SizeXS, setSizeXS] = useState(TypeProduct != 'Scarpe' ? 'XS' : 36);
    const [SizeS, setSizeS] = useState(TypeProduct != 'Scarpe' ? 'S' : 38);
    const [SizeM, setSizeM] = useState(TypeProduct != 'Scarpe' ? 'M' : 40);
    const [SizeL, setSizeL] = useState(TypeProduct != 'Scarpe' ? 'L' : 42);
    const [SizeXL, setSizeXL] = useState(TypeProduct != 'Scarpe' ? 'XL' : 44);

    const [QuantityXS, setQuantityXS] = useState(parseInt(newMagazine[newNumber].Size[0].Quantity));
    const [QuantityS, setQuantityS] = useState(parseInt(newMagazine[newNumber].Size[1].Quantity));
    const [QuantityM, setQuantityM] = useState(parseInt(newMagazine[newNumber].Size[2].Quantity));
    const [QuantityL, setQuantityL] = useState(parseInt(newMagazine[newNumber].Size[3].Quantity));
    const [QuantityXL, setQuantityXL] = useState(parseInt(newMagazine[newNumber].Size[4].Quantity));

    const [Color, setColor] = useState(newMagazine[newNumber].Color);
    const [Rate, setRate] = useState(0);
    const [CodeProd, setCodeProd] = useState(newMagazine[newNumber].CodeProd);
    const [Materials, setMaterials] = useState(newMagazine[newNumber].Materials);
    const [DatePubblication, setDatePubblication] = useState(newMagazine[newNumber].DatePubblication);
    const [Shipment, setShipment] = useState(newMagazine[newNumber].Shipment);
    const [Promo, setPromo] = useState(newMagazine[newNumber].Promo);

    const [deleteSure, setDeleteSure] = useState(false);
    const [modify, setModify] = useState(false);

    const arrayProductModify = {
       
        Id: newMagazine[newNumber].Id ,
        Produttore: arrayAdminUser[Master].nome,
        Marca: Marca,
        NameProduct: NameProduct,
        Description: Description,
        TypeProduct: TypeProduct,
        Thumb: Thumb, //,"wp5866591.jpg"
        gender: Gender,
        Image: [
            {
                Front: ImageA, //.split('C:\\fakepath\\')[1],
                Back: ImageB , //.split('C:\\fakepath\\')[1],
                Side: ImageC , //.split('C:\\fakepath\\')[1],
                FrontB:ImageD, //.split('C:\\fakepath\\')[1],
                FrontC:ImageE, //.split('C:\\fakepath\\')[1]
            }
        ],
        
        Price: Price,
        Size: [
            {
                Size: SizeXS,
                Quantity: QuantityXS,
                Count: 0
            },
            {
                Size: SizeS,
                Quantity: QuantityS,
                Count: 0,
            },
            {
                Size: SizeM,
                Quantity: QuantityM,
                Count: 0
            },
            {
                Size: SizeL,
                Quantity: QuantityL,
                Count: 0
            },
            {
                Size: SizeXL,
                Quantity: QuantityXL,
                Count: 0
            },
        ],
        
        Color:[Color],
        Rate: Rate, //?
        CodeProd: CodeProd,
        Materials: Materials,
        DatePubblication: DatePubblication,
        Shipment: Shipment,
        Promo: Promo,
    }

    console.log(newMagazine)

    return <div className="position-relative">

<div className="addProduct container">
            <h1>Modifica o Elimina Prodotto</h1>
            <input type="text" value={arrayAdminUser[Master].nome}/> 
            <input type="text" placeholder="Marca" defaultValue={newMagazine[newNumber].Marca} onChange={(e) => setMarca(e.target.value)}/> 
            <input type="text" placeholder="Nome Prodotto" defaultValue={newMagazine[newNumber].NameProduct} onChange={(elem) => setNameProduct(elem.target.value)}/>
            <input type="text" placeholder="Descrizione" defaultValue={newMagazine[newNumber].Description} onChange={(elem) => setDescription(elem.target.value)}/>

            <div>
              <label className="pr-3" htmlFor="">Tipo Di Prodotto:</label> 
                <select onChange={(elem) => setTypeProduct(elem.target.value)}>
                    <option style={{'textAlign': 'center'}}>{newMagazine[newNumber].TypeProduct}</option>
                    {arrayGeneriAbbigliamento.map((chiave: any, i: any) => {
                            return (
                            <option value={chiave} key={i}>{chiave}</option>
                        );
                    })}
                </select>  
            </div>
            
           
            <div>
                <label htmlFor="">img principale</label>
                <input type="file" onChange={(elem) => setThumb(elem.target.value)}/>
            </div>
           <div>
               <div>Sesso: </div>
               <label htmlFor="">Uomo</label>
               <input type="radio" name="gender" onChange={() => setGender('Uomo')}/>
               <label htmlFor="">Donna</label>
               <input type="radio" name="gender" onChange={() => setGender('Donna')}/>
               <label htmlFor="">Unisex</label>
               <input type="radio" name="gender" onChange={() => setGender('Unisex')}/>
           </div>
            <div>
                <div>Img secondarie: </div>
                <input type="file" onChange={(elem:any) => setImageA(elem.target.value)}/>
                <input type="file" onChange={(elem:any) => setImageB(elem.target.value)}/>
                <input type="file" onChange={(elem:any) => setImageC(elem.target.value)}/>
                <input type="file" onChange={(elem:any) => setImageD(elem.target.value)}/>
                <input type="file" onChange={(elem:any) => setImageE(elem.target.value)}/>

            </div>
            <input type="number" placeholder="prezzo" defaultValue={newMagazine[newNumber].Price} onChange={(elem:any) => setPrice(elem.target.value)}/>
            <div className="SizeNewProduct">
                <div>
                    Taglia: 
                </div>
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'XS' : 36}</label>
                <input type="number" placeholder="0" defaultValue={qnt[0]} min={0} onChange={(elem:any) => setQuantityXS(parseInt(elem.target.value))}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'S' : 38}</label>
                <input type="number" placeholder="0" defaultValue={qnt[1]} min={0} onChange={(elem:any) => setQuantityS(parseInt(elem.target.value))}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'M' : 40}</label>
                <input type="number" placeholder="0" defaultValue={qnt[2]} min={0} onChange={(elem:any) => setQuantityM(parseInt(elem.target.value))}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'L' : 42}</label>             
                <input type="number" placeholder="0"  defaultValue={qnt[3]}  min={0} onChange={(elem:any) => setQuantityL(parseInt(elem.target.value))}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'XL' : 44}</label>
                <input type="number" placeholder="0"  defaultValue={qnt[4]}  min={0} onChange={(elem:any) => setQuantityXL(parseInt(elem.target.value))}/>


            </div>

            <input type="text" placeholder="Colore Prodotto" defaultValue={newMagazine[newNumber].Color} onChange={(elem:any) => setColor(elem.target.value.split(','))} />

            
            <input type="number" placeholder="Valutazione del Prodotto" defaultValue={newMagazine[newNumber].Rate} min={0} max={5} onChange={(elem:any) => setRate(elem.target.value)}/>
            <input type="text" placeholder="Materiale" defaultValue={newMagazine[newNumber].Materials} onChange={(elem) => setMaterials(elem.target.value)}/>
            <input type="data" placeholder="Data di Immagazimento" defaultValue={newMagazine[newNumber].DatePubblication}  onChange={(elem) => setDatePubblication(elem.target.value)}/> 
            <input type="text" placeholder="Spedizione in" defaultValue={newMagazine[newNumber].Shipment} onChange={(elem) => setShipment(elem.target.value)}/>
            <div>
                <label htmlFor="">Promo: </label>
                 {Promo == true ? <input type="checkbox" id="checkbox" checked onChange={() => setPromo(false)}/>: <input type="checkbox" id="checkbox" onChange={() => setPromo(true)}/>}
                
            </div>  
             
            
        </div>  
        <div className="text-center d-flex justify-content-around">
            
            <a href="#confirm"><button className="btn btn-dark mb-3" onClick={() => {
                setModify(true)
            }}>Salva</button></a>


            <a href="#confirm"><button className="btn btn-danger mb-3" onClick={() => {
                    setDeleteSure(true);
            }}>Elimina</button></a>
        </div>

        { deleteSure == true ? <div id="confirm" className="position-absolute dele" >
            <div className="text-center pt-4"><p className="text-danger"> <i className="fas fa-exclamation-triangle mr-3"></i>ALERT MODIFICA DATABASE<i className="fas fa-exclamation-triangle ml-3"></i></p></div>
            <div className="text-center mt-3 fs-4">Stai per eliminare un prodotto dal tuo database <br />
            <span className="fs-6">Il prodotto sarà eliminato definitivamente dal tuo database, vuoi continuare?</span></div>
            <div className="d-flex justify-content-around" style={{'marginTop': '180px'}}>
                    <button className="btn btn-dark" onClick={() => {
                        setDeleteSure(false);
                    }}>Annulla</button>
                    <Link to={`/AdminPage/modifica`}><button className="btn btn-danger" onClick={() => {
                        // Splice the array at the index of your object
                        newMagazine.splice(newNumber, 1)
                        // Save back to localStorage
                        localStorage.setItem("magazine", JSON.stringify(newMagazine))
                    }}>Conferma</button></Link>
            </div>
        </div> : ''}

        { modify == true ? <div id="confirm" className="position-absolute dele" >
            <div className="text-center pt-4"><p className="text-success"> <i className="fas fa-exclamation-triangle mr-3"></i>ALERT MODIFICA DATABASE<i className="fas fa-exclamation-triangle ml-3"></i></p></div>
            <div className="text-center mt-3 fs-4">Stai per modificare un prodotto dal tuo database <br />
            <span className="fs-6">Assicurarsi di aver inserito tutti i campi prima di continuare...</span></div>
            <div className="d-flex justify-content-around" style={{'marginTop': '180px'}}>
                    <button className="btn btn-dark" onClick={() => {
                        setModify(false);
                    }}>Annulla</button>
                    <Link to={`/AdminPage/modifica`}><button className="btn btn-success" onClick={() => {
                        newMagazine[newNumber] = arrayProductModify

                        localStorage.setItem( 'magazine' , JSON.stringify(newMagazine));
                    }}>Conferma</button></Link>
            </div>
        </div> : ''}

        

    </div>


}
export default ToModify