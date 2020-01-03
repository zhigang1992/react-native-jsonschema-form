export * from './FormContext';

import {StyleSheet, View} from 'react-native';
import React, {Component, forwardRef} from 'react';
import Form from 'react-jsonschema-form';
import Theme from './Theme';

class MockHTMLForm extends Component {
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
    paddingHorizontal: 10,
  },
});

const Index: typeof Form = forwardRef(
  ({fields, widgets, ...directProps}: any, ref) => {
    return (
      <Form
        {...Theme}
        {...directProps}
        fields={{
          ...Theme.fields,
          ...fields,
        }}
        widgets={{
          ...Theme.widgets,
          ...widgets,
        }}
        ref={ref}
        {...{tagName: MockHTMLForm}}
      />
    );
  },
) as any;

export default Index;
