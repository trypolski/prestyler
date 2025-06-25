import React from 'react';
import Card from './Card/Card';
import CardHeader from './CardHeader/CardHeader';
import CardImage from './CardImage/CardImage';
import CardImageOverlay from './CardImageOverlay/CardImageOverlay';
import CardBody from './CardBody/CardBody';
import CardTitle from './CardTitle/CardTitle';
import CardSubtitle from './CardSubtitle/CardSubtitle';
import CardText from './CardText/CardText';
import CardLink from './CardLink/CardLink';
import CardFooter from './CardFooter/CardFooter';
import CardGroup from './CardGroup/CardGroup';

export default {
  title: 'Components/Card',
  component: Card,
};

export function FullCardExample() {
  return (
    <Card style={{ width: 260 }}>
      <CardHeader>Header: Header text</CardHeader>
      <CardImage src="/card-image-placeholder.png" alt="Card image" />
      <CardBody>
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card Subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s
          content.
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
      <CardFooter>Footer: 2 days ago</CardFooter>
    </Card>
  );
}

export function CardImageBottomExample() {
  return (
    <Card style={{ width: 260 }}>
      <CardHeader>Header: Header text</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card Subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s
          content.
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
      <CardImage src="/card-image-placeholder.png" alt="Card image" isBottom />
    </Card>
  );
}

export function CardWithImageOverlay() {
  return (
    <Card className="bg-dark text-white" style={{ width: 320 }}>
      <CardImage src="/card-image-placeholder.png" alt="Card image" />
      <CardImageOverlay>
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content.
        </CardText>
      </CardImageOverlay>
    </Card>
  );
}

export function CardGroupExample() {
  return (
    <CardGroup>
      <Card>
        <CardImage src="/card-image-placeholder.png" alt="Card image 1" />
        <CardBody>
          <CardTitle tag="h5">Card 1</CardTitle>
          <CardText>
            This is a card in a group. It contains supporting text as a natural lead-in to content.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="/card-image-placeholder.png" alt="Card image 2" />
        <CardBody>
          <CardTitle tag="h5">Card 2</CardTitle>
          <CardText>This is another card in the group. It also contains supporting text.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="/card-image-placeholder.png" alt="Card image 3" />
        <CardBody>
          <CardTitle tag="h5">Card 3</CardTitle>
          <CardText>And this is a third card in the group.</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
}
