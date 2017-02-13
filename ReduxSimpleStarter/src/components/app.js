import React, { Component } from 'react';
import ProductsList from '../containers/ProductsList';
import CartPanel from '../containers/CartDetail';

export default class App extends Component {
  render() {
    return (
    <div>
      <ProductsList />
      <CartPanel />
    </div>
    );
  }
}
