import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import { CARD_CLASSES } from '../constants';

export default function CardFooter(props) {
  return <Wrapper {...props} wrapperClass={CARD_CLASSES.cardFooter} />;
}
