//require('./styles/otherstyles.sass')
require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

import React from 'react';
import ReactDOM from 'react-dom';

import Component from './components/component';

ReactDOM.render(<Component />, document.querySelector('.container'));
