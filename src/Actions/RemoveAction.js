function RemoveAction(position, value) {
  return {
    type: 'REMOVE',
    value: value,
    position: position,
  }
}

export default RemoveAction;