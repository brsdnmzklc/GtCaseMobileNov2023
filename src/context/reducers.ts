interface stateTypes {
  firstName: string;
  lastName: string;
  isLoggedIn: boolean;
  darkMode: boolean;
  markers: any;
}

const initialState: stateTypes = {
  firstName: '',
  lastName: '',
  isLoggedIn: false,
  darkMode: false,
  markers: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        firstName: '',
        lastName: '',
      };
    case 'TOGGLE_DARK_MODE':
      return {...state, darkMode: !state.darkMode};
    case 'ADD_MARKER':
      return {
        ...state,
        markers: [...state.markers, action.payload],
      };

    case 'EDIT_MARKER':
      const editedMarker = {
        id: action.payload.id,
        coordinate: action.payload.coordinate,
        name: action.payload.name,
      };
      return {
        ...state,
        markers: state.markers.map(marker => {
          if (marker.id === editedMarker.id) {
            return editedMarker;
          } else {
            return marker;
          }
        }),
      };
    case 'REMOVE_MARKER':
      return {
        ...state,
        markers: state.markers.filter(marker => marker.id !== action.payload),
      };
    case 'CLEAR_MARKERS':
      return {
        ...state,
        markers: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
