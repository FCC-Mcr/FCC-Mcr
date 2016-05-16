//require('./styles/otherstyles.sass')
require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

import React from 'react';
import ReactDOM from 'react-dom';



import Component from './components/Component';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'


const TestMenus = React.createClass({ 
    
    render() {
        return (
            <div>
              <h1>im a menu component</h1>
              
                { React.cloneElement(this.props.children, this.props) }
              
            </div>
            )
    }
    
});
    
const TestComp = () => (<div>testdivpleaseignore<Link to="/">link to home</Link></div>)
const TestHome = () => (<div>testhomepage<Link to="/test">link to page</Link></div>)

const MainRouter = () => (
  (
    <Router history={browserHistory}>
      <Route path="/" component={ TestMenus }>
        <IndexRoute component={ TestHome }>test</IndexRoute>
        <Route path='/test' component={TestComp}></Route>
      </Route>
    </Router>
  )    
)



ReactDOM.render(<MainRouter/>, document.querySelector('.container'));
