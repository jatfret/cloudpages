function testReducer (state = {}, action) {
  switch (action.type) {
    case 'read':
      return Object.assign({}, state, {list: 'empty'})
    default:
      return state
  }
}

export default testReducer
