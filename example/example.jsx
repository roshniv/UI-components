import React from 'react';
import ReactComponentSkeleton from '../.';
import i18nNoop from 'ar-i18n-noop';

React.render(
	const styles = {
      headline: {
        fontSize: '2.5em',
        paddingTop: '5%',
        marginBottom: '2%',
        color: '#3c3c3c',
      },
      CongratulationsCardtitleStyle: {
        fontSize: '3em',
        color: '#1f1f1f',
        lineHeight: '1em',
        marginLeft: '12%'
      },
      CardTitleContainerStyle: {
        padding: '0.5em'
      },
      card_style: {
        boxShadow: 'none',
        height: 'auto',
        margin: '2% 5%',
        textAlign: 'left',
        backgroundColor: 'transparent',
      },
      TextFieldStyle: {},
      TextFieldUnderlineFocusStyle: {
          borderColor: '#0499ff',
          bottom: '0px'
      },
      SubmitButtonStyle: {
        textShadow: 'none',
      }
    };
    
    <Signup TextFieldStyle = {this.props.TextFieldStyle ? this.props.TextFieldStyle : styles.TextFieldStyle}
      TextFieldUnderlineFocusStyle = {this.props.TextFieldUnderlineFocusStyle ? this.props.TextFieldUnderlineFocusStyle : ""}
      SubmitButtonStyle = {styles.SubmitButtonStyle}
      referrerCode={this.props.referrerCode}
      email={this.props.email}
      isDuplicate={this.state.isDuplicate}
      resendInvite={this.resendInvite}
      signup={this.signup}
      error={this.state.error}
      errorText={this.state.errorText}
      submitRegistrationButtonDisabled={this.state.submitRegistrationButtonDisabled}
    />,
    document.getElementById('epl-react-component-skeleton-example-container')
);
