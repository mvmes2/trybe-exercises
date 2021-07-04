const INITIAL_STATE = {
  value: 0,
  productsList: [],
}

function CartReducer(state = INITIAL_STATE, action) {
  if(action.type === 'ADD') {
    return {
        ...state,
        value: state.value + action.value,
        productsList: [...state.productsList,
         {
          productName: action.product,
          productValue: action.value
        }]
    }
  }
  if (action.type === 'REMOVE') {
   return {
      ...state,
      value: state.value - action.value,
      productsList: state.productsList.filter((item, index) => index !== action.position),
  }
  }
  if (action.type === 'CLEAR') {
    return INITIAL_STATE
  }
  return state;
}

export default CartReducer;