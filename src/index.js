import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';

import Card from 'components/Card';

import 'styles/base';

class ExampleView extends PureComponent {
  state = { message: null }

  handleChange = ({ event: { error } }) => {
    this.setState({ message: error ? error.message: null });
  }

  render() {
    return (
      <Card onChange={this.handleChange} />
    );
  }
}
ReactDOM.render(
  <StripeProvider apiKey={__STRIPE_PUBLISHABLE_KEY__}>
    <ExampleView />
  </StripeProvider>,
  document.getElementById('stripe-card')
);