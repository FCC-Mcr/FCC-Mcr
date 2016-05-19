//require('./styles/otherstyles.sass')
require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

import React from 'react';
import ReactDOM from 'react-dom';

// root components.
import Navigtion from './containers/Navigation';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';


const MainRouter = () => (
  (
    <Router history={browserHistory}>
      <Route path="/" component={ Navigtion }>
        test

      </Route>
    </Router>
  )
);



ReactDOM.render(<MainRouter/>, document.querySelector('.container'));


/*
<IndexRoute component={ HomePage }></IndexRoute>
<Route path='/about' component={About}></Route>
*/
