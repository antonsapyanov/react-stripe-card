import React, { PureComponent } from 'react';
import { Elements, injectStripe } from 'react-stripe-elements';

import CardFront from './CardFront';
import CardBack from './CardBack'

class Card extends PureComponent {
  state = { brand: 'default' }

  handleChange = ({ type, event }) => {
    if (this.props.onChange) {
      this.props.onChange({ type, event });
    }
    if (event.brand) {
      this.setState({ brand: event.brand === 'unknown' ? 'default' : event.brand });
    }
  }

  render() {
    return (
      <div className="stripe-card">
        <CardFront onChange={this.handleChange} brand={this.state.brand} />
        <CardBack  onChange={this.handleChange} />
      </div>
    );
  }
}

const StripeCard = injectStripe(Card);

export default props => (
  <Elements>
    <StripeCard {...props} />
  </Elements>
);