import React from 'react';

import Encryption from '../utils/Encryption';
import { Input, Button } from 'react-bootstrap/lib';

class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  //action
  sendInviteCallback =(e) => {
    e.preventDefault();

    var email = this.refs.email.getValue() || this.refs.email_mob.getValue();
    if(email === "") {
      this.setState({error: true})
      this.props.errorText = 'Email address is mandatory.';
      this.props.error =  true;
      e.stopPropagation();
      return;
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
        this.setState({error: true})
        this.props.errorText = 'Please provide a valid email address.';
        this.props.error =  true;
        e.stopPropagation();
        return;
    }

    email = Encryption.encodeHTML(email);
   
    this.props.sendInviteClick(email);
  };

    //action
  resendInviteCallback =(e) => {
    e.preventDefault();

    var email = this.refs.email.getValue() || this.refs.email_mob.getValue();
    if(email === "") {
      this.setState({errorText: 'Email address is mandatory.', error: true})
      e.stopPropagation();
      return;
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
        this.setState({errorText: 'Please provide a valid email address.', error: true})
        e.stopPropagation();
        return;
    }

    email = Encryption.encodeHTML(email);
    
    this.props.resendInviteClick(email);
  };

  render() {
    const style = {
      SubmitButtonStyle: {
        textShadow: 'none',
        border:'none',
        height:'40px'
      },
      TextFieldStyle: {
        height: '40px'
      }
    };
    const submitBtn = <Button
              className="btn full-width"
              style={this.props.SubmitButtonStyle ? this.props.SubmitButtonStyle : style.SubmitButtonStyle} 
              onMouseDown={this.props.alreadyRegistered ? this.resendInviteCallback : this.sendInviteCallback}
              disabled={this.props.submitRegistrationButtonDisabled}
            >{this.props.alreadyRegistered ? "RESENT INVITE" : "REQUEST AN INVITE"}</Button>

    return (
      <div>
          <form className="show-on-mobile">
              <Input type="email" placeholder="email@example.com" name="email" ref="email_mob" defaultValue={this.props.defaultValue}
              className="signup-textfield" style={this.props.TextFieldStyle ? this.props.TextFieldStyle : style.TextFieldStyle}
              help={this.props.errorText} errorStyle={this.props.error? {position: 'absolute', bottom: '-1.3em'} : {}} />
              {submitBtn}
          </form>
          <form className="hide-on-mobile">
              <Input type="email" placeholder="email@example.com" name="email" ref="email" defaultValue={this.props.defaultValue}
              className="signup-textfield" style={this.props.TextFieldStyle ? this.props.TextFieldStyle : style.TextFieldStyle}
              help={this.props.errorText} errorStyle={this.props.error? {position: 'absolute', bottom: '-1.3em'} : {}} buttonAfter={submitBtn} />
          </form>
      </div>
    );
  }

}

module.exports = Signup;
