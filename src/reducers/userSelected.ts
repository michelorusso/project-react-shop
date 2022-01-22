import { store } from '../store';

export default function UserSelected(state = 0, action:any) {

switch (action.type) {
    case 'USER_SELECTED':
        return state = action.user;
    default:
        return state
}
}