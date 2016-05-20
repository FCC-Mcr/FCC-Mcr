//require('./styles/otherstyles.sass')
require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

//Main react imports.
import React from 'react';
import ReactDOM from 'react-dom';

// root components.
import App from './components/App';
import AboutPage from './AboutPage';
import ResourcePage from './ResourcePage';
import ContactPage from './ContactPage';

// routing components
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const testPage = () => (<div>test</div>)

const MainRouter = () => (
  (
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ testPage }></IndexRoute>
        <Route path='/resources' component={ ResourcePage }> resources</Route>
        <Route path='/about' component={ AboutPage }></Route>
        <Route path='/contact' component={ ContactPage }></Route>
      </Route>
    </Router>
  )
);

/*
<IndexRoute component={ HomePage }></IndexRoute> // default page
<Route path='/about' component={About}></Route>  // pages to come
*/



ReactDOM.render(<MainRouter/>, document.querySelector('#root'));
