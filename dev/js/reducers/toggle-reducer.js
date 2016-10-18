const initialState = {
  placeType: 'gym'
}

export default function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PLACES':
      return Object.assign({}, state, {
        placeType: action.placeType
      });  
    default:
      return state
  }
}