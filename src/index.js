import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { Provider } from 'react-redux';
// import  rootReducer from './reducer';
// import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE
// const store = createStore(rootReducer);


//ACTION



//REDUCER



ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
