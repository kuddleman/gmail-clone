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
      emails: EMAILS,
      isRead: {
        "99a48ebf-e282-4362-85c9-5cc1598037b1": true
      }
    }
  }

  markRead = emailId => {
    //copy the object
    let isRead = { ...this.state.isRead };
    //set isRead to true, thereby modifying the object
    isRead[emailId] = true;
    //set state to the modified copy
    this.setState({ isRead })  //shortcut syntax for { isRead: isRead }
  }

  markUnRead = emailId => {
    let isRead = { ...this.state.isRead }
    isRead[ emailId ] = false;
    this.setState({ isRead })
  }
 
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <Fragment>
            <Nav />
            <Route exact path="/" component={ () => (
              <Inbox 
                emails={ this.state.emails } 
                isRead={ this.state.isRead } 
                markUnRead={ this.state.markUnRead }
                markRead={ this.state.markRead }
              />
            )}   
            />
            <Route exact path="/read/:id" component={ () => (
              <EmailRead emails={ this.state.emails }
                         markRead={ this.markRead }
              />
            )}/>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}


