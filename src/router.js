import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from './views';
import Dashboard from './views/dashboard';
import Manager from './views/manager'

export default function ({ history, app }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/dashboard/dashboard" />
        <Route path="/dashboard/dashboard" component={Dashboard} />
        <Route path="/dashboard/alert" tableName="alert" component={Manager} />

        <Route path="/monitor/device" tableName="device" component={Manager} />
        <Route path="/monitor/item" tableName="item" component={Manager} />
        <Route path="/monitor/website" tableName="site" component={Manager} />
        <Route path="/monitor/template" tableName="template" component={Manager} />

        <Route path="/system/agent" tableName="agent" component={Manager} />
        <Route path="/system/user" tableName="user" component={Manager} />

        <Route path="/system/hostGroup" tableName="hostGroup" component={Manager} />
        <Route path="/system/userGroup" tableName="userGroup" component={Manager} />
      </Route>
    </Router>
  );
}