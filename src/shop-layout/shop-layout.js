import React from 'react';

import { Route, Switch } from 'react-router-dom';
import ShopHeader from './shop-header';
import { HomePage, CartPage } from '../pages';

const ShopLayout = () => {
  return (
    <main role="main" className="container">
    <ShopHeader />
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact/>

        <Route
          path='/cart'
          component={CartPage} />
      </Switch>
    </main>
  )
};

export default ShopLayout;
