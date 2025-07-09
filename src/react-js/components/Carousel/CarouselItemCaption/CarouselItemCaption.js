import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';

export default function CarouselItemCaption(props) {
  return <Wrapper {...props} wrapperClass={['carousel-caption', 'd-none', 'd-md-block']} />;
}
