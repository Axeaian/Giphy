import React from 'react';
import Homepage from './Homepage';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/app" component={App} />
            </Switch>
        </Router>
    );
}

export default Main;