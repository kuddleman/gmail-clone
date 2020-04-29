
//left off at 11:04 Marking Emails as Read
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import EmailRow from './EmailRow'
//import EmailRead from './EmailRead'

export default class Index extends Component {

  

  render() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <p>You have { this.props.emails.length } emails</p>
        <div className="all-emails">
          { this.props.emails.map((email, index) => {
             return <Link key={ index } to={`/read/${email.id}`}>
                       <EmailRow email={ email } 
                                 isRead={ this.props.isRead } 
                                 markRead={ this.props.markRead }
                                 markUnRead={ this.props.markUnRead }
                      />
                    </Link>
          })}
        </div>
      </div>
    )
  }
}