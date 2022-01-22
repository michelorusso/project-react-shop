import { useSelector } from 'react-redux';
import { store } from '../store';

const initalstate = {
    utenti :[
    {
        userName:'KenKaneki131099',
        nome:'Gabriele',
        cognome:'Sanna',
        email:'gabrisanna131099@gmail.com',
        password:'12345',
        loggato: false,
    },
    {
        userName:'Naofumi201095',
        nome:'Michele',
        cognome:'Lorusso',
        email:'miky-l@hotmail.com',
        password:'123456',
        loggato: false
    }
    ],
    log : false
}

export default function LoginUser(state :any= initalstate, action:any) {

switch (action.type) {
    case 'LOGGATO':
        return {...state,
            log:  state.utenti[action.count].userName === action.username && state.utenti[action.count].password === action.password ? state.log = action.log : state.log
        }
    default:
        return state
}
}