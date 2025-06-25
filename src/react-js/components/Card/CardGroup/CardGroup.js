import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import { CARD_CLASSES } from '../constants';

export default function CardGroup(props) {
  return <Wrapper {...props} wrapperClass={CARD_CLASSES.cardGroup} />;
}
