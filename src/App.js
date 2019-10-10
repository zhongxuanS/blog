import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import TimeLine from './components/timeline';
import Todo from './components/todo';
import Tools from './components/tools';
import PostDetail from './components/post-detail';
import EditPost from './components/edit-post';

import Footer from './components/footer';
import BackToUp from './components/back-to-up';


import './App.css';

library.add(fab, fas);


class App extends Component {
  render() {
    const blogInfo = {
      blogTitle: 'szx9231',
      blogBranding: 'Way to Fun'
    };


    return (
      <Router>
        <div>
          <Header blogInfo={blogInfo}></Header>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={PostDetail} />
          <Route exact path="/diary" component={EditPost} />
          <Route exact path="/about" component={About} />
          <Route exact path="/timeline" component={TimeLine} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/tools" component={Tools} />

          <Footer />
          <BackToUp />
        </div>
      </Router >

    );
  }
}


export default App;