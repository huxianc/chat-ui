import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";

import "story.css";

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;
export const ColorIcon = () => <Icon icon={SmileIcon} color='green' />;
export const OpacityIcon = () => (
  <Icon icon={SmileIcon} opacity={0.5} color='green' />
);
