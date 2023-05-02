import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const availableAirlines = (state = [], action) => {
    return state;
}

/** TODO: Create store */

const ourSecondStore = createStore(
    combineReducers({
        availableAirlines
    }),
    applyMiddleware(
        logger
    )
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <Provider store={ourSecondStore}>
            <App />
        </Provider>
    </React.StrictMode>

);