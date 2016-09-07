import './Notification.css';

import React from 'react';
import { render } from 'react-dom';
import {Alert} from 'react-bootstrap';

const alertStyle = {
  'error': 'danger',
  'success': 'success',
  'warning': 'warning',
  'info': 'info'
};

export default class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: 'error',
      title: null,
      content: null,
      dismissable: false,
      dismissAfter: 5000
    }
  }

  componentWillMount() {
    this.setState({type: this.props.type});
  }

  componentDidMount() {
    setTimeout(
      this.setState.bind(this, {type: null}), 
    this.state.dismissAfter);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({type: nextProps.type});
  }

  render() {
    var title=this.state.title || this.props.title;
    var content=this.state.content || this.props.content;
    if(title) {
      var title_dom= <h4> {title} </h4>
    }

    if(content) {
      var content_dom= <p> {content} </p>
    }

    var icon_dom;
    if(this.props.type == 'error') {
      icon_dom = <span className="icon-error"/>
    } else {
      icon_dom = <span className="icon-correct"/>
    }

    if(this.state.type) {
      return (
        <Alert bsStyle={alertStyle[this.props.type]}>
          {icon_dom}
          {title_dom}
          {content_dom}
        </Alert>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

