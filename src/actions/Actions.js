// TO DO: use consts for types?
export function setFilterTerm(filterTerm) {
  return {
    type: 'SET_FILTER_TERM',
    filterTerm,
  };
}
