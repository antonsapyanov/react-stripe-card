import React from 'react';
import { CardNumberElement, CardExpiryElement } from 'react-stripe-elements';

import { CARD_NUMBER_TYPE, CARD_EXPIRY_TYPE } from 'constants';

const numberOptions = {
  classes: {
    base: 'stripe-card__number',
    empty: 'stripe-card__number--empty',
    invalid: 'stripe-card__number--invalid',
    focus: 'stripe-card__number--focus',
    complete: 'stripe-card__number--complete',
  },
  style: {
    base: {
      fontSize: '1.25em',
      textShadow: '1px 1px grey',
      letterSpacing: '0.27em',
    },
  }
};

const expiryOptions = {
  classes: {
    base: 'stripe-card__expiry',
    empty: 'stripe-card__expiry--empty',
    invalid: 'stripe-card__expiry--invalid',
    focus: 'stripe-card__expiry--focus',
    complete: 'stripe-card__expiry--complete',
  },
  style: {
    base: {
      fontSize: '1em',
      textShadow: '1px 1px black',
    },
  },
};

const CardFront = ({ onChange, brand }) => (
  <div className="stripe-card__front">
    <div className="stripe-card__brand"><div key={brand} id={brand} /></div>
    <CardNumberElement
      onChange={e => onChange({ type: CARD_NUMBER_TYPE, event: e })}
      {...numberOptions}
    />
    <CardExpiryElement
      onChange={e => onChange({ type: CARD_EXPIRY_TYPE, event: e })}
      {...expiryOptions}
    />
  </div>
);

export default CardFront;