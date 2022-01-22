export default function counter(state = 0, action:any) {
    switch (action.type) {
        case 'INCREMENT':
            return state = action.count + 1
        case 'DECREMENT':
            return state = action.count - 1
        default:
            return state
    }
}