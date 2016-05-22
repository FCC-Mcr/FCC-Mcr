import React from 'react';
// sub components
import Navigation from '../containers/Navigation';
import TopBar from './TopBar';

/*
  Main Application component
*/
const App = ( props ) => (
  (
    <div className="fill">
      <TopBar />
      <Navigation />
      <div className="page-content">
        {
          React.cloneElement(props.children, props)
        }
      </div>
    </div>
  )
);

export default App;
