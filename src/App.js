import React, { Component } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import './App.css';
class App extends Component {
  render() {
    const blogInfo = {
      blogTitle: 'szx9231',
      blogBranding: 'Way to Fun'
    };

    return (
      <div>
        <Header blogInfo={blogInfo}></Header>
        <Nav />
      </div>
    );
  }
}
export default App;