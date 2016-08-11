import React from 'react';


import FilterDisplayItem from '../../src/components/FilterDisplayItem';


/*
  display of filter tags
  @ filters: @array of filter tags
  @ toggleFilter: bound function to toggle filter tag in and out of parent state.filters 
*/
const FilterDisplay = ({ allFilters=[], currentFilters=[], toggleFilter }) => (
  
  <ul>
    {
      allFilters.map( (item, i) => (
        <FilterDisplayItem
          key={i}
          item={ item }
          toggleFilter={ toggleFilter }
          active={ currentFilters.indexOf(item) !== -1 }
        />)
        )
    }
  </ul>
  
);

export default FilterDisplay;