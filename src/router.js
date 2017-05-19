import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from './routes/index';
import Dashboard from './routes/dashboard';
import Manager from './routes/manager'
import MakeTab from './routes/develop/makeTab';

export default function ({ history, app }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/customer/customer" />
        <Route path="/customer/customer" tableName="customer" component={Manager} />
        <Route path="/customer/group" tableName="customerGroup" component={Manager} />

        <Route path="/suppiler/thridly" tableName="thridly" component={Manager} />
        <Route path="/suppiler/fleet" tableName="fleet" component={Manager} />
        <Route path="/suppiler/private" tableName="private" component={Manager} />

        <Route path="/assets/line" tableName="line" component={Manager} />
        <Route path="/assets/equipment" tableName="equipment" component={Manager} />
        <Route path="/assets/driver" tableName="driver" component={Manager} />
        <Route path="/assets/vehicle" tableName="vehicle" component={Manager} />
        <Route path="/assets/warehouse" tableName="warehouse" component={Manager} />

        <Route path="/develop/table" tableName="table" component={Manager} />
        <Route path="/develop/tab" tableName="tab" component={Manager} />
        <Route path="/develop/newTab" component={MakeTab} />
      </Route>
    </Router>
  );
}