import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './shop-header.scss';

const ShopHeader = ({ orderItemsTotal, orderTotal }) => {
  return (
    <header className="shop-header row">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="logo text-dark">ReStore</span>
      </Link>

      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <span className="shopping-cart text-dark">
          <i className="cart-icon fa fa-shopping-cart" />
          {orderItemsTotal} items (${orderTotal})
        </span>
      </Link>
    </header>
  );
}

const mapStateToProps = ({ shoppingCart: { orderTotal, orderItemsTotal }}) => {
  return { orderTotal, orderItemsTotal }
}

export default connect(mapStateToProps)(ShopHeader);
