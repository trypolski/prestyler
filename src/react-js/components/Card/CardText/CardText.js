import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import { CARD_CLASSES } from '../constants';

export default function CardText(props) {
  return <Wrapper {...props} tag="p" wrapperClass={CARD_CLASSES.cardText} />;
}
