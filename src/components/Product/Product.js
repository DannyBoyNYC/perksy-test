import React, { Component } from 'react';
import { StyledProduct } from './Product.styled';
import { formatPrice } from '../../utilities';

class Product extends Component {
  render() {
    const { name, price, image } = this.props.product;
    return (
      <StyledProduct>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{formatPrice(price)}</p>
          <button
            onClick={() =>
              this.props.addToCart(this.props.index, this.props.product)
            }
          >
            Add to Cart
          </button>
          <button
            onClick={() =>
              this.props.removeFromCart(this.props.index, this.props.product)
            }
          >
            Remove
          </button>
        </div>
      </StyledProduct>
    );
  }
}

export default Product;
