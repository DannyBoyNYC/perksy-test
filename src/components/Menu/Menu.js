import React, { useState } from 'react';
import { formatPrice } from '../../utilities';
import { bool } from 'prop-types';
import { StyledMenu, ListItem } from './Menu.styled';
import { Modal } from '../../components';

const Menu = ({ open, order, products, cart }) => {
  const [ordered, setOrdered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cartTotal = Object.keys(order);

  const cartSorted = cart.sort();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const goPerksy = () => {
    window.open('https://www.getperksy.com/', '_blank');
  };

  const renderOrder = key => {
    const product = products.products[key - 1];
    const count = order[key];
    return (
      <ListItem key={product.name} style={{ order: ordered ? count : '' }}>
        <p>{product.name}</p>
        <span>
          qty: {count}, total {formatPrice(count * product.price)}
        </span>
      </ListItem>
    );
  };

  const total = cartTotal.reduce((prevTotal, key) => {
    const product = products.products[key - 1];
    const count = order[key];
    return prevTotal + count * product.price;
  }, 0);

  return (
    <StyledMenu open={open}>
      <h2>Your Order</h2>
      <ul>{cartTotal.map(renderOrder)}</ul>
      <h4>
        {total === 0 ? 'Nada zero zilch!' : `Total ${formatPrice(total)}`}
      </h4>

      {total !== 0 && (
        <>
          <p>
            Sort your cart by quantity before you buy and get a free Perksy gift
            card!
          </p>
          <button onClick={() => setOrdered(!ordered)}>
            {ordered ? <i className='material-icons'>done</i> : ''}
            Sort by Quantity!
          </button>
          {ordered !== false && (
            <>
              <p>You're only moments away from your free Perksy gift card!</p>
              <button onClick={toggleModal}>Now Sort by Product!</button>
            </>
          )}
        </>
      )}
      {showModal ? (
        <Modal>
          <h1>Here are your ordered items!</h1>
          <ul className='ordered'>
            {cartSorted.map(item => (
              <li>{item} x 1</li>
            ))}
          </ul>

          <div className='buttons'>
            <button onClick={goPerksy}>Claim your gift certificate!</button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </Modal>
      ) : null}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
