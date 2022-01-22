    export default function descriptionSearch(state = '', action:any) {

    switch (action.type) {
        case 'DESCRIPTION_SELECTED':
            return state = action.descriptionSearch
        default:
            return state
    }
}