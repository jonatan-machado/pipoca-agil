import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {Home} from '../screens/Home/';
import { SignIn } from '../screens/SignIn';

export default function Routes() {
  return (
    <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/signin" exact component={SignIn} />
    </Switch>
  );
}