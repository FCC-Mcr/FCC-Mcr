import React from 'react';
import ResourceList from '../containers/ResourceList';

/* rest api for later
let resources;

// fetch data from firebase and transform to array
// 'on' method will fetch data on initial call and then
// run the callback upon any changes to our firebase
ref.on('value', (snapshot) => {
  
const uri = 'https://fcc-manchester.firebaseio.com/resources.json';


//convert received data to an array and add the firebase key
let obj = snapshot.val().resources;
resources = Object.keys(obj).map( key => obj[key] );
  
});
*/
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
