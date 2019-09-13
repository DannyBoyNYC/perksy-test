import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { name, price, qty, image } = this.props.product;

    return (
      <div className='product'>
        <div>
          <img src={image} alt={name} />
        </div>
        <div style={{ paddingRight: '0.5rem' }}>
          <h3>{name}</h3>
          <p>Unit Price: ${price}</p>
          <p>Quantity {qty}</p>
          <p>Total ${qty * price}</p>
        </div>
      </div>
    );
  }
}

export default Product;
