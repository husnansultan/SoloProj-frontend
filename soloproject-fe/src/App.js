import React, { Component } from 'react';

import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
//import './App.css';

class App extends Component {
  render() {
    return (
        <div>
        <Header/>
        <ProductGrid/>
    </div>
    );
  }
}

export default App;
