import React from 'react';


/*
 a filter tag item
 @ item: filter word
 @ toggleFilter: Function bound to parent app
 @ active: bool wether or not this filter is active.
*/
const FilterDisplayItem = ({ item, toggleFilter, active }) => (
  <li
    className = {  active ? "filter-display__tag--active" : "filter-display__tag" }
    onClick={ () => toggleFilter(item) }>
    { item }
  </li>
);


/*
  display of filter tags
  @ filters: @array of filter tags
  @ toggleFilter: bound function to toggle filter tag in and out of parent state.filters 
*/
const FilterDisplay = ({ allFilters=[], currentFilters=[], toggleFilter }) => (
  
  <ul>
    {
      allFilters.map( (item) => (
        <FilterDisplayItem 
          item={ item }
          toggleFilter={ toggleFilter }
          active={ currentFilters.indexOf(item) !== -1 }
        />)
        )
    }
  </ul>
  
);

export default FilterDisplay;