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

        <Route path="/customer/customer" tableName="customer" component={Manager} />
        <Route path="/customer/group" tableName="customerGroup" component={Manager} />
        <Route path="/customer/contact" tableName="customerContact" component={Manager} />
        <Route path="/customer/insurance" tableName="customerInsurance" component={Manager} />
        <Route path="/customer/line" tableName="customerLine" component={Manager} />
        <Route path="/customer/relationship" tableName="customerRelationship" component={Manager} />
        <Route path="/customer/equipment" tableName="equipment" component={Manager} />
        <Route path="/customer/driver" tableName="driver" component={Manager} />
        <Route path="/customer/vehicle" tableName="vehicle" component={Manager} />
        <Route path="/customer/warehouse" tableName="warehouse" component={Manager} />

        <Route path="/transfer/load" tableName="user" component={Manager} />
        <Route path="/transfer/depart" tableName="user" component={Manager} />
        <Route path="/transfer/arrive" tableName="user" component={Manager} />
        <Route path="/transfer/outsource" tableName="user" component={Manager} />

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

        <Route path="/scaffold/table" tableName="table" component={Manager} />
      </Route>
    </Router>
  );
}