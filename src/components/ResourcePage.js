import React from 'react';
import ResourceList from '../containers/ResourceList';

const temp = [
  {title: 1, rating: 2, description: '', tags: ['one','two']},
  {title: 2, rating: 3, description: '', tags: ['one']},
  {title: 3, rating: 1, description: '', tags: ['two', 'three']}
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
