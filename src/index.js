import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import registerServiceWorker from './registerServiceWorker';
import "tachyons";
// eslint-disable-next-line
import  {people} from "./people";

ReactDOM.render(
  <App/>
, document.getElementById('root'));
registerServiceWorker();
