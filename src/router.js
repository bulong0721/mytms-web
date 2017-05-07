import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from './routes/index';
import Dashboard from './routes/dashboard';
import Manager from './routes/manager'
import AddOrder from './routes/pickup/addOrder';

export default function ({ history, app }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/pickup/add" />
        <Route path="/pickup/add" tableName="order" component={Manager} />
        <Route path="/pickup/order" tableName="user" component={Manager} />
        <Route path="/pickup/sign" component={AddOrder} />

        <Route path="/base/partner" tableName="partner" component={Manager} />
        <Route path="/base/vehicle" tableName="vehicle" component={Manager} />
        <Route path="/base/driver" tableName="driver" component={Manager} />
        <Route path="/base/track" tableName="user" component={Manager} />
        <Route path="/base/receipt" tableName="user" component={Manager} />

        <Route path="/report/simple" tableName="user" component={Manager} />
        <Route path="/report/payment" tableName="user" component={Manager} />
        <Route path="/report/waybill" tableName="user" component={Manager} />
        <Route path="/report/transport" tableName="user" component={Manager} />
        <Route path="/report/profit" tableName="user" component={Manager} />

        <Route path="/settle/statement" tableName="user" component={Manager} />
        <Route path="/settle/cash" tableName="user" component={Manager} />
        <Route path="/settle/revenue" tableName="user" component={Manager} />
        <Route path="/settle/expense" tableName="user" component={Manager} />

        <Route path="/system/client" tableName="user" component={Manager} />
        <Route path="/system/organization" tableName="user" component={Manager} />
        <Route path="/system/employee" tableName="user" component={Manager} />
        <Route path="/system/account" tableName="user" component={Manager} />
      </Route>
    </Router>
  );
}