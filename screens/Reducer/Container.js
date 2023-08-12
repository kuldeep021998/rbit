const initialState = {
  view: {},
};

export default function Container(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_VIEW':
      state.view[action.payload[0]] = action.payload[1];

      // console.log(action.payload);
      return {
        ...state,
        view: state.view,
      };

    case 'Delete_View_Items':
      delete state.view[action.payload];
      return {
        ...state,
        cart: state.cart,
      };

    default:
      return state;
  }
}
