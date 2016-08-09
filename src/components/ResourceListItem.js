import React from 'react';


const ResourceListItem = ({ item }) => (
    <li className="resource-list-item">
      <div className="resource-list-item__title">
        { item.title } 
      </div>
      <div className="resource-list-item__description">
        { item.description }
      </div>
      <div className="resource-list-item__tags">
        { item.tags.join(', ') }
      </div>
      <div className="resource-list-item__rating">
        { item.rating }
      </div>
      <div className="resource-list-item__link">
        { item.uri }
      </div>
    </li>
);

export default ResourceListItem;