import React, { Component } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Carousel from './components/carousel/Carousel';

import pic1 from './components/carousel/images/pic1.jpg';
import pic2 from './components/carousel/images/pic2.jpg';
import pic3 from './components/carousel/images/pic3.jpg';

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
        <Carousel imgUrls={[pic1, pic2, pic3]}/>
      </div>
    );
  }
}
export default App;