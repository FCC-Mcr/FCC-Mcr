import React from 'react';
import ResourceList from '../containers/ResourceList';
import 'whatwg-fetch';


const temp = [
  {title: 'Loading', rating: '', description: '', tags: ''}
];



/*
  ResourcePage component
*/
const ResourcePage = () => (
  (
    <div className="fill">
      Resource page.
      <ResourceList resources={temp}/>
    </div>
  )
);

export default ResourcePage;
