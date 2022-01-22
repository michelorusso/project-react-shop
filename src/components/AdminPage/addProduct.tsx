import React, { useState } from "react";
import { Link } from "react-router-dom";
import fotoCv from "../../img/fotoCv.jpeg"
import micheleFoto from "../../img/mik.jpg"
import { store } from '../../store';
import { useDispatch, useSelector } from "react-redux";

export const Anagrafica = () => {
    const dispatch = useDispatch();

    const arrayMagazine = store.getState();

    let maga :any= localStorage.getItem('magazine')
    let newMagazine =  JSON.parse(maga)

    const [newNumber, setNewNumber] = useState( newMagazine == null ? arrayMagazine.readmagazine.magazine.length: newMagazine.length )

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
    
    const [Marca, setMarca] = useState('');
    const [NameProduct, setNameProduct] = useState('');
    const [Description, setDescription] = useState('');
    const [TypeProduct, setTypeProduct] = useState('');
    const [Thumb, setThumb] = useState('');
    const [Gender, setGender] = useState('');

    const [ImageA, setImageA] = useState('');
    const [ImageB, setImageB] = useState('');
    const [ImageC, setImageC] = useState('');
    const [ImageD, setImageD] = useState('');
    const [ImageE, setImageE] = useState('');

    const [Price, setPrice] = useState(0);

    const [SizeXS, setSizeXS] = useState(TypeProduct != 'Scarpe' ? '' : 0);
    const [SizeS, setSizeS] = useState(TypeProduct != 'Scarpe' ? '' : 0);
    const [SizeM, setSizeM] = useState(TypeProduct != 'Scarpe' ? '' : 0);
    const [SizeL, setSizeL] = useState(TypeProduct != 'Scarpe' ? '' : 0);
    const [SizeXL, setSizeXL] = useState(TypeProduct != 'Scarpe' ? '' : 0);


    const [QuantityXS, setQuantityXS] = useState(0);
    const [QuantityS, setQuantityS] = useState(0);
    const [QuantityM, setQuantityM] = useState(0);
    const [QuantityL, setQuantityL] = useState(0);
    const [QuantityXL, setQuantityXL] = useState(0);

    const [Color, setColor] = useState([]);
    const [Rate, setRate] = useState(0);
    const [CodeProd, setCodeProd] = useState('ABCDEFG212334');
    const [Materials, setMaterials] = useState('');
    const [DatePubblication, setDatePubblication] = useState('');
    const [Shipment, setShipment] = useState('');
    const [Promo, setPromo] = useState(false);

    
    const arrayNewProduct = {
       
            Id: newNumber ,
            Produttore: arrayAdminUser[Master].nome,
            Marca: Marca,
            NameProduct: NameProduct,
            Description: Description,
            TypeProduct: TypeProduct,
            Thumb: Thumb.split('C:\\fakepath\\')[1],
            gender: Gender,
            Image: [
                {
                    Front: ImageA.split('C:\\fakepath\\')[1],
                    Back: ImageB.split('C:\\fakepath\\')[1],
                    Side: ImageC.split('C:\\fakepath\\')[1],
                    FrontB:ImageD.split('C:\\fakepath\\')[1],
                    FrontC:ImageE.split('C:\\fakepath\\')[1]
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
                    Count: 0
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
    
    return <div>
        
        <div className="addProduct container">
            <h1>Aggiungi un nuovo prodotto</h1>
            <input type="text" value={arrayMagazine.LoginUser.utenti[Master].nome}/> 
            <input type="text" placeholder="Marca" onChange={(elem) => setMarca(elem.target.value)}/> 
            <input type="text" placeholder="Nome Prodotto" onChange={(elem) => setNameProduct(elem.target.value)}/>
            <input type="text" placeholder="Descrizione" onChange={(elem) => setDescription(elem.target.value)}/>

            <div>
              <label className="pr-3" htmlFor="">Tipo Di Prodotto:</label> 
                <select onChange={(elem) => setTypeProduct(elem.target.value)}>
                    <option value="" style={{'textAlign': 'center'}}>- - - Seleziona - - -</option>
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
            <input type="number" placeholder="prezzo" onChange={(elem:any) => setPrice(elem.target.value)}/>
            <div className="SizeNewProduct">
                <div>
                    Taglia: 
                </div>
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'XS' : 36}</label>
                <input type="number" placeholder="0" min={0} onChange={(elem:any) => setQuantityXS(elem.target.value)}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'S' : 38}</label>
                <input type="number" placeholder="0" min={0} onChange={(elem:any) => setQuantityS(elem.target.value)}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'M' : 40}</label>
                <input type="number" placeholder="0" min={0} onChange={(elem:any) => setQuantityM(elem.target.value)}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'L' : 42}</label>               
                <input type="number" placeholder="0" min={0} onChange={(elem:any) => setQuantityL(elem.target.value)}/>
                <br />
                <label htmlFor="">{TypeProduct != 'Scarpe' ? 'XL' : 44}</label>
                <input type="number" placeholder="0" min={0} onChange={(elem:any) => setQuantityXL(elem.target.value)}/>


            </div>

            <input type="text" placeholder="Colore Prodotto" onChange={(elem:any) => setColor(elem.target.value.split(','))} />

            
            <input type="number" placeholder="Valutazione del Prodotto" min={0} max={5} onChange={(elem:any) => setRate(elem.target.value)}/>
            <input type="text" placeholder="Materiale" onChange={(elem) => setMaterials(elem.target.value)}/>
            <input type="data" placeholder="Data di Immagazimento" onChange={(elem) => setDatePubblication(elem.target.value)}/> 
            <input type="text" placeholder="Spedizione in" onChange={(elem) => setShipment(elem.target.value)}/>
            <div>
                <label htmlFor="">Promo: </label>
                <input type="checkbox" onChange={() => setPromo(true)}/>
            </div>  
             
            
        </div> 

        <div className="text-center">
            <Link to={`/AdminPage`}> 
            <button className="btn btn-dark mb-3" onClick={() => {arrayMagazine.readmagazine.magazine.push(arrayNewProduct);
                var newstate :any= [];
                var receiveddata = JSON.stringify(arrayMagazine.readmagazine.magazine);
                newstate.push(receiveddata);
            
                localStorage.setItem( 'magazine' , newstate);
            }}>Aggiungi</button>
            </Link>
        </div>

    </div>
}
export default Anagrafica;

