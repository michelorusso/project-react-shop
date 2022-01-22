export default function Filters(state = '', action:any) {
    switch (action.type) {
        case 'FILTER':
            return state = action.Filtri
       
        default:
            return state
    }
}