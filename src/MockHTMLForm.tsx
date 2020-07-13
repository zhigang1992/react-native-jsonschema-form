import React, { Component } from 'react';
import { View } from 'react-native';

class Event {
  preventDefault() {
  }
}

// @ts-ignore
global.Event = global.Event || Event;
// @ts-ignore
global.CustomEvent = global.CustomEvent || Event;

export class MockHTMLForm extends Component {
  render() {
    return <View>{ this.props.children }</View>;
  }

  dispatchEvent(e: Event) {
    // @ts-ignore
    e.persist = () => null;
    // @ts-ignore
    this.props.onSubmit(e);
  }
}
