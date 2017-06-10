import React from 'react';
import { CardCVCElement } from 'react-stripe-elements';

import { CARD_CVC_TYPE } from 'constants';

const cvcOptions = {
  classes: {
    base: 'stripe-card__cvc',
    empty: 'stripe-card__cvc--empty',
    invalid: 'stripe-card__cvc--invalid',
    focus: 'stripe-card__cvc--focus',
    complete: 'stripe-card__cvc--complete',
  },
  style: {
    base: {
      fontSize: '1em',
      fontStyle: 'italic',
    },
  },
};

const CardBack = ({ onChange }) => (
  <div className="stripe-card__back">
    <div className="stripe-card__line" />
    <div style={{ display: 'inline-block', width: '100%' }}>
      <div className="stripe-card__sign-field" />
      <CardCVCElement onChange={e => onChange({ type: CARD_CVC_TYPE, event: e })} {...cvcOptions} />
    </div>
  </div>
);

export default CardBack;