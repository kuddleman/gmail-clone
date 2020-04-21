import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import EMAILS from './MOCK_DATA.json'
import Inbox from './components/Inbox'
import EmailRead from './components/EmailRead'
import Nav from './components/Nav'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      emails: EMAILS
    }
  }

  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <Fragment>
            <Nav />
            <Route exact path="/" component={ () => (
              <Inbox emails={ this.state.emails } />
            )} />
            <Route exact path="/read/:id" component={ () => (
              <EmailRead emails={ this.state.emails }/>
            )}/>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}


