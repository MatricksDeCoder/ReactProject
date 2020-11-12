import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Route} from "react-router-dom"
import {ContextProvider} from './Context'

ReactDOM.render(
    <ContextProvider>
        <Route >
            <App />
        </Route>
    </ContextProvider>,
     document.getElementById('root')
     
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();