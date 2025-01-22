import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import React,{Component} from 'react';
import { useState } from 'react';
import ListShoppers from './components/ListShoppers';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isShopping: false,
    };
  }

  // Event handler to toggle shopping state
  handleStartShopping = () => {
    this.setState({ isShopping: true });
  };

  render() {
    return (
      <div class="App">
          {/* Conditionally render components based on state */}
          {this.state.isShopping ? (
            <ListShoppers />
          ) : (
            <Welcome onStartShopping={this.handleStartShopping} />
          )}
      </div>
    );
  }

}

export default App;
