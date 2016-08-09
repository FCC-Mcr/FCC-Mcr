import React from 'react';
import ResourceListItem from './ResourceListItem';



const ResourceList = ({ resources = [] }) => (
  <ul>
    {
      resources.length ? resources.map( listItem => (
        <ResourceListItem item={ listItem }/>
        )) 
        : <li>No Resources Found</li>
    }
  </ul>
);

export default ResourceList;