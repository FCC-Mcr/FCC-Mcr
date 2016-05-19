import React from 'react';

import Navigation from '../containers/Navigation';
import TopBar from './TopBar';

const App = () => (
  (
    <div className="fill">
      <TopBar />
      <Navigation />
      <div className="container-fluid page-content">
        {
          //React.cloneElement(this.props.children, this.props)
        }
      </div>
    </div>
  )
)

export default App;
