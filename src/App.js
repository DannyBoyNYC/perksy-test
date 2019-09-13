import React, { Component } from 'react';
import { Header, Product, Menu, Cart } from './components';
import products from './products.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';

class App extends Component {
  state = {
    products: {},
    order: [],
    cart: [],
    open: false
  };

  componentDidMount() {
    this.setState({ products });
  }

  addToCart = (key, product) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
    // separate arr
    const cart = [...this.state.cart];
    cart.push(product.name);
    this.setState({ cart });
  };

  removeFromCart = (key, product) => {
    const order = { ...this.state.order };
    if (order[key] > 0) {
      order[key] = order[key] - 1 || 0;
      this.setState({ order });
      // separate arr
      const cart = [...this.state.cart];
      var index = cart.indexOf(product.name);
      cart.splice(index, 1);
      this.setState({ cart });
    }
  };

  setOpen = bool => {
    this.setState({ open: bool });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className='app'>
            <Header />

            <div className='app-main'>
              {products.products.map(product => (
                <Product
                  key={product.id}
                  index={product.id}
                  product={product}
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                />
              ))}
            </div>
            <Cart
              open={this.state.open}
              setOpen={this.setOpen}
              order={this.state.order}
            />
            <Menu
              open={this.state.open}
              products={this.state.products}
              order={this.state.order}
              cart={this.state.cart}
            />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
