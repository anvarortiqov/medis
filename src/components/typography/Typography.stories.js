import { Typography } from "@/components/typography/Typography";
import "./index.css";

export default {
  title: "UI/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    type: "p",
    children: "Hello world",
    className: "border",
  },
};

export const Heading1 = {
  name: "h1",
  args: {
    type: "h1",
    children: "Hello world",
  },
};
