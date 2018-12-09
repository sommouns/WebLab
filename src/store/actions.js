actions = {
  increment( {
    commit
  } ) {
    commit( 'INCREMENT' )
  },
  decrement( {
    commit
  } ) {
    commit( 'DECREMENT' )
  }
}
export default actions