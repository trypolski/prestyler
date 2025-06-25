import React from 'react';
import Header from '../../common/Header/Header';
import { CARD_CLASSES } from '../constants';

export default function CardTitle(props) {
  return <Header {...props} headerClass={CARD_CLASSES.cardTitle} />;
}
