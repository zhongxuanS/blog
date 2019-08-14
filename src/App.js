import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.css';
class App extends Component {
  render() {
    const blogInfo = {
      blogTitle: 'szx9231',
      blogBranding: 'Way to Fun'
    };

    return (
      <Header blogInfo={blogInfo}></Header>
    );
  }
}
export default App;