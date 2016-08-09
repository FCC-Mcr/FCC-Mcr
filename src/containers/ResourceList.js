import React from 'react';
import ResourceListItem from '../components/ResourceListItem';

/*
  Resource List
  @ props {
    @resources: Array of Objects
  }
*/
class ResourceList extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      resources: this.props.resources || [],
      filters: []
    };
  }
  
  /*
    returns arrayof unique tags from array of resources
    @ resources: Array of resources
  */
  getPossibleTags(resources) {
    let all = resources.reduce((acc,curr) => [...acc,...curr.tags] , []);
    return Array.from(new Set(all));
  }
  
  /*
    filters a list of resources and returns only those that meet the state.filters requirements
    @ resources: Array of Resource Objects
  */
  filterResources(resources) {
    let filtered = resources;
    if(resources.length > 0 && this.state.filters.length > 0) {
      this.state.filters.forEach((filterWord) => {
        filtered = filtered.filter((resource) => {
          return resource.tags.indexOf(filterWord) != -1;
        });
      });
    }
    return filtered;
  }
  
  /*
    adds or removes a filter word to state.filters
    @ word: filter word to be added or removed.
  */
  handleToggleFilter(word) {
    let newFilters = this.state.filters.indexOf(word) === -1 ?
          [ ...this.state.filters, word ] :
          [ ...this.state.filters.filter( ( a ) => a !== word ) ];
    this.setState({
      filters: newFilters
    });
  }
  
  /*
    sorts state.resources.
    @ dir: String direction of sort
    @ field: String representation of field to sort by
  */
  handleSort(dir, field) {
    const sortFuncs = {
      'ASC': () => [...this.state.resources.sort( (a, b) => a[field] - b[field] )],
      'DESC': () => [...this.state.resources.sort( (a, b) => b[field] - a[field] )]
    };
    this.setState({
      resources: sortFuncs[dir]()
    });
  }
  
  render() {
    const filteredResources = this.filterResources(this.state.resources);
    return (
      <ul>
      {
        filteredResources.length >= 1 ? filteredResources.map( listItem => (
          <ResourceListItem item={ listItem }/>
          ))
          : <li>No Resources Found</li>
      }
      </ul>
    );
  }
  
};

export default ResourceList;