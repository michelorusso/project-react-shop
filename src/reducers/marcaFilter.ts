export default function MarcaFilters(state = '', action:any) {
    switch (action.type) {
        case 'MARCA':
            return state = action.marca
       
        default:
            return state
    }
}