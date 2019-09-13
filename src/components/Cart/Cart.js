import React from 'react';
import { bool, func } from 'prop-types';
import { StyledCart } from './Cart.styled';

const Cart = ({ order, open, setOpen }) => {
  const cartTotal = Object.keys(order);
  const total = cartTotal.reduce((prevTotal, key) => {
    const count = order[key];
    return prevTotal + count;
  }, 0);

  return (
    <StyledCart onClick={() => setOpen(!open)}>
      <i className='material-icons'>shopping_cart</i>
      {total}
    </StyledCart>
  );
};

Cart.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Cart;
