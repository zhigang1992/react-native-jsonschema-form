import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Event {
  preventDefault() {}
}

// @ts-ignore
global.Event = global.Event || Event;

export class MockHTMLForm extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }

  dispatchEvent(e: Event) {
    // @ts-ignore
    e.persist = () => null;
    // @ts-ignore
    this.props.onSubmit(e);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 15,
  },
});
