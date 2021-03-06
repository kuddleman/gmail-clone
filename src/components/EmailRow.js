import React, { Component, Fragment } from 'react'
import './EmailRow.css'

export default class EmailRow extends Component {

  //toggle class names
  getClassName() {
    let className = "email-row "
    let emailId = this.props.email.id
    if ( this.props.isRead[emailId] ) {
      
      className += "email-is-read"
    }
    return className;
  }

  toggleIsRead = () => {
    let emailId = this.props.email.id
    if ( this.props.isRead(emailId)){
       this.props.markUnRead(emailId)
    } else {
      this.props.markRead(emailId)
    }

    //indicate that this function handled the click
    //and the click should not propogate to any other click function

    
    
  }


  render() {
    return (
      <Fragment>
        <div className="email-toggle-is-read">
          <button onClick={ this.toggleIsRead }>Click Read</button>
        </div>
        <div className={ this.getClassName() }>
          <div className="email-date">
          { this.props.email.date}
          </div>
          <div className="email-from">
          { this.props.email.email }
          </div>
          <div className="email-subject">
          { this.props.email.subject }
          </div>
          <div className="email-body">
            { this.props.email.body }
          </div>
        </div>
      </Fragment>
    )
  }
}