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

export default FilterDisplayItem;