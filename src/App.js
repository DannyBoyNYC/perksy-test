import React, { Component } from 'react';
import Product from './Product';
import Header from './Header';
import './App.css';
import Products from './products.json';

class App extends Component {
  state = {
    groceryList: [],
    order: 'Natural order'
  };

  componentDidMount() {
    const groceryList = Products;
    this.setState({ groceryList: groceryList });
  }

  toggleSortPrice = event => {
    this.sortByPrice();
  };

  sortByPrice = () => {
    const { groceryList } = this.state;
    let newGroceryList = groceryList;
    newGroceryList = newGroceryList.sort((a, b) =>
      parseInt(a.price) > parseInt(b.price) ? -1 : 1
    );
    this.setState({
      groceryList: newGroceryList,
      order: 'Ordering by price'
    });
  };

  toggleSortQty = () => {
    const { groceryList } = this.state;
    let newGroceryList = groceryList;
    newGroceryList = newGroceryList.sort((a, b) => (a.qty > b.qty ? -1 : 1));
    this.setState({
      groceryList: newGroceryList,
      order: 'Ordering by quantity'
    });
  };

  toggleListReverse = event => {
    const groceryList = [...this.state.groceryList];
    let newGroceryList = groceryList.reverse();
    this.setState({
      groceryList: newGroceryList,
      order: 'Reverse natural order'
    });
  };

  naturalOrder = () => {
    window.location.reload(false);
  };

  toggleSortProduct = () => {
    const groceryList = [...this.state.groceryList];
    let newGroceryList = groceryList;
    newGroceryList = newGroceryList.sort((a, b) => (a.name < b.name ? -1 : 1));
    this.setState({
      groceryList: newGroceryList,
      order: 'Alphabetical by Product'
    });
  };

  render() {
    const { groceryList, order } = this.state;
    return (
      <div className='App'>
        <Header />
        <article>
          <button onClick={this.naturalOrder}>Natural Order</button>
          <button onClick={this.toggleListReverse}>Reverse Order</button>
          <button onClick={this.toggleSortPrice}>Order by Unit Price</button>
          <button onClick={this.toggleSortQty}>Order by Quantity</button>
          <button onClick={this.toggleSortProduct}>
            Alphabetical by Product
          </button>
          <h4>{order}</h4>
          <div className='App-main'>
            {groceryList.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </article>
      </div>
    );
  }
}

export default App;
