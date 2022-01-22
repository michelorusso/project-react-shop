export default function FiltriType(state = 'Scarpe', action:any) {
    switch (action.type) {
        case 'FILTERTYPE':
            return state = action.filtriType
       
        default:
            return state
    }
}