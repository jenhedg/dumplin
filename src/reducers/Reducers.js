export function filterTerm(state = '', action) {
  switch (action.type) {
    case 'SET_FILTER_TERM':
      return action.filterTerm;

    default:
      return state;
  }
}
