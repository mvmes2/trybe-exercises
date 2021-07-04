function AddAction(product, value) {
  return {
    type: 'ADD',
    product: product,
    value: value,
  }
}

export default AddAction;