import React from 'react';


const ResourceListItem = ({ item }) => (
    <li className="resource-list-item">
      <div className="resource-list-item__title">
        { item.title }
      </div>
      <div className="resource-list-item__rating">
          { item.rating }
      </div>
      <div className="resource-list-item__description">
        { item.description }
      </div>
      <div className="resource-list-item__tags">
        { item.tags.length > 1 ? item.tags.join(', ') : item.tags}
      </div>
      <div className="resource-list-item__link">
        <a target="_blank" href={item.url}>
          { item.url }
        </a>
      </div>
    </li>
);

export default ResourceListItem;