import { combineReducers } from "redux";

import readmagazine from './readMagazine';
import carrello from "./carrello";
import ProdSelected from "./productSelected";
import UserSelected from "./userSelected";
import LoginUser from "./login";
import DescriptionSearch from './descriptionSearch'
import Filters from './filtri'
import FiltriType from './filtriTypeProduct'
import MarcaFilters from "./marcaFilter";
export default combineReducers({
    readmagazine,
    carrello,
    ProdSelected,
    UserSelected,
    LoginUser,
    DescriptionSearch,
    Filters,
    FiltriType,
    MarcaFilters
})