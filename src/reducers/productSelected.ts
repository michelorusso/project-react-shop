    import { store } from '../store';

    var num = localStorage.getItem('numeroProdotto');
    
    export default function ProdSelected(state = num, action:any) {

    switch (action.type) {
        case 'PROD_SELECTED':
            return state = action.number
        default:
            return state
    }
}