import React from 'react';
import ResourceListItem from '../components/ResourceListItem';
import FilterDisplay from '../components/FilterDisplay';
import 'whatwg-fetch';

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
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
  }
  
  /*
    is using fetch to pull resourcedata from 
  */
  componentDidMount() {
    const uri = 'https://fcc-manchester.firebaseio.com/resources.json';

    fetch(uri,{	method: 'get'})
    .then( (response) => {
      return response.json()
    })
    .then((json) => {
      let obj = json;
      let items = Object.keys(obj).map( key => obj[key] );
      
      items = items.map((item) => {
        return {...item,
      tags: item.tags.split(', ').filter((tag) => tag.length)}
      });
      //console.log(items)
      this.setState({resources: items})

    });
    
  }
  
  /*
    returns arrayof unique tags from array of resources
    @ resources: Array of resources
  */
  getPossibleTags(resources) {
    if(resources.length < 1){ return [] }
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
      
      <div>
      
      <FilterDisplay allFilters={this.getPossibleTags(this.state.resources)} currentFilters={this.state.filters} toggleFilter={ this.handleToggleFilter }/>

      <ul className="resource-list">
      {
        filteredResources.length >= 1 ? filteredResources.map( listItem => (
          <ResourceListItem item={ listItem }/>
          ))
          : <li>No Resources Found</li>
      }
      </ul>
      </div>
    );
  }
  
}

export default ResourceList;