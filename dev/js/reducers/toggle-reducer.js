const TORONTO = {lat: 43.7515, lng: -79.373};

const initialState = {
  location: TORONTO,
	radius: '2000',
  type: ['school']
}

export default function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PLACES':
      return Object.assign({}, state, {
        type: [action.payload]
      });  
    default:
      return state
  }
}