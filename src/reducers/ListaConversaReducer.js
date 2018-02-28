import { LISTA_CONVERSA_USUARIO } from '../actions/Types';
const INITIAL_STATE = {
id: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTA_CONVERSA_USUARIO: 
      return {...state, payload: action.payload/*, id: action.id*/ }
    default:
      return state;
      break;
  }
}
