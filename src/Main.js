import React from 'react';
import Homepage from './Home/Homepage';
import App from './App/App';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/app" component={App} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    );
}

export default Main;