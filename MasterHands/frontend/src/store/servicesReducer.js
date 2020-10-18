
let initialState = Object.freeze({
  id: 0
});

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ID':
      return Object.assign(
        {},
        state,
        { id: action.id }
      );
        
    default:
      return state
  }
}

export default servicesReducer;