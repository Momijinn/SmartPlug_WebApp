import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper" >
          <Content className="content-wrapper" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(App);