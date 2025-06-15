import React from "react";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  DangerButton,
  WarningButton,
  InfoButton,
  LightButton,
  DarkButton,
  LinkButton,
} from "./Buttons";

export default {
  title: "Components/Buttons",
  component: Button,
};

export const AllButtons = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: 200, marginRight: "20px" }}>
      <Button>Default Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <SuccessButton>Success Button</SuccessButton>
      <DangerButton>Danger Button</DangerButton>
      <WarningButton>Warning Button</WarningButton>
      <InfoButton>Info Button</InfoButton>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: 200, marginRight: "20px"  }}>
      <LightButton>Light Button</LightButton>
      <DarkButton>Dark Button</DarkButton>
      <LinkButton>Link Button</LinkButton>
      <DarkButton isLarge>Large Dark Button</DarkButton>
      <SecondaryButton isSmall>Small Secondary Button</SecondaryButton>
      <SuccessButton isOutlined>Success Outlined Button</SuccessButton>
      <SecondaryButton disabled>Disabled Button</SecondaryButton>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: 200 }}>
      <Button isLink href="#">Default Link</Button>
      <PrimaryButton isLink href="#">Primary Link</PrimaryButton>
      <SecondaryButton isLink href="#">Secondary Link</SecondaryButton>
      <SuccessButton isLink href="#">Success Link</SuccessButton>
      <DangerButton isLink href="#">Danger Link</DangerButton>
      <WarningButton isLink href="#">Warning Link</WarningButton>
      <InfoButton isLink href="#">Info Link</InfoButton>
      <LightButton isLink href="#">Light Link</LightButton>
      <DarkButton isLink href="#">Dark Link</DarkButton>
      <LinkButton isLink href="#">Link</LinkButton>
      <DarkButton isLink isLarge href="#">Large Dark Link</DarkButton>
      <SecondaryButton isLink isSmall href="#">Small Secondary Link</SecondaryButton>
      <SuccessButton isLink isOutlined href="#">Success Outlined Link</SuccessButton>
      <SecondaryButton isLink disabled href="#">Disabled Link</SecondaryButton>
    </div>
  </div>
);
