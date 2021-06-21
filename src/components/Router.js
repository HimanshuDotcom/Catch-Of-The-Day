import React from 'react';
import App from './App.js';
import StorePicker from './StorePicker.js';
import NotFound from './NotFound.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {StorePicker} />
            <Route path="/store/:storeId" component = {App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;