import React, { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../store";
import { useDispatch , useSelector} from "react-redux";
import SingleCard from './cardSingle'
import Header from './header'
export const Search = () => {
    const dispatch = useDispatch();
    const creaState = store.getState();
    const arrayGeneriAbbigliamento = creaState.readmagazine.arrayGeneriAbbigliamento
    const arrayMagazzine = creaState.readmagazine.magazine
    const [filtroTypeProduct, setTypeProduct] = useState('all')
    const [filtroSesso, setSesso] = useState('all')
    const [filtroMarca, setTypeMarca] = useState('all')
    const [filtroPrice, setPrice] = useState(200)
    const [filtroSearch, setSearch] = useState('')
    const genre = useSelector((state: any) => state.Filters);
    const typeProduct = useSelector((state: any) => state.FiltriType);
    const marcaFilter = useSelector((state:any)=> state.MarcaFilters)
    console.log(typeProduct)
    var arrayFiltrato: any[] = []
    arrayFiltrato = arrayMagazzine.filter((element: any) => ((element.TypeProduct == filtroTypeProduct || filtroTypeProduct == 'all') && 
                                                                (element.Marca == filtroMarca || filtroMarca == 'all') && 
                                                                (element.gender == filtroSesso || filtroSesso == 'all') && 
                                                                (element.gender == genre || genre == '') && 
                                                                (element.Marca == marcaFilter || marcaFilter == '') &&
                                                                (element.TypeProduct == typeProduct || typeProduct == '') &&
                                                                element.Price <= filtroPrice && 
                                                                (element.NameProduct.includes(filtroSearch) || element.Description.includes(filtroSearch)))
    )
    const arrayMarcaAbbigliamento = ['Nike', 'North Sails', 'Tommy Hilfiger', 'Adidas']

    return <div>
        <Header/>
        <div className="container filtriSearch">
            
           {(genre !=''|| marcaFilter) !=''? <h1>
               {genre !=''?genre:marcaFilter}
            </h1>:<h1>Cerca un Prodotto</h1>}
            <div className="d-flex flex-wrap">
                <span>
                    Search:
                    <input type="text" onChange={((ele:any)=>{
                        setSearch(ele.target.value)
                    })}/>
                </span>
                <span>
                    <label htmlFor="">Genere: </label>
                    <select name="" id="" onChange={((ele) => {
                        setTypeProduct(ele.target.value)
                    })}>
                        <option value="all">All</option>
                        {
                            arrayGeneriAbbigliamento.map((element) => {
                                return <option value={element}>{element}</option>
                            })
                        }
                    </select>
                </span>
                {marcaFilter==''?<span>
                    <label htmlFor="">Marca: </label>
                    <select name="" id="" onChange={((ele) => {
                        setTypeMarca(ele.target.value)
                    })}>
                        <option value="all">All</option>
                        {
                            arrayMarcaAbbigliamento.map((element) => {
                                return <option value={element}>{element}</option>
                            })
                        }
                    </select>
                </span>:''}
                {genre ==''?<span>
                    <label htmlFor="">Gender: </label>
                    <select name="" id="" onChange={((ele) => {
                        setSesso(ele.target.value)
                    })}>
                        <option value="all">All</option>
                        <option value="unisex">Unisex</option>
                        <option value="Donna">Donna</option>
                        <option value="Uomo">Uomo</option>
                    </select>
                </span>:''}

                <span>
                    <label htmlFor=""> Prezzo:</label>
                    <span id="rangeValue">${filtroPrice}</span>
                    <input className="range" type="range" min="0" max="1000" onChange={((ele: any) => {
                        setPrice(ele.target.value)
                    })} />
                </span>


            </div>
        </div>
        <div className="container d-flex flex-wrap">
            {
                arrayFiltrato.map((element: any, index: any) => {
                    return  <SingleCard element={element} index={index}/>
                })
            }
        </div>


    </div>
}
export default Search;