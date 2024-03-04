import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ArrowUpIcon } from "@icon";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <ArrowUpIcon />
        click me!
      </>
    ),
  },
  argTypes: {
    hoverable: {
      control: "boolean",
    },
    intent: {
      options: ["default", "destructive", "outline"],
      control: { type: "radio" },
      description:
        "Change the button style depending on the supposed actions to be trigrered",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Another description, overriding the comments",
      },
    },
  },
} satisfies Meta<typeof Button>;

type Props = StoryObj<typeof Button>;

export const Primary: Props = {
  args: {
    intent: "default",
  },
};

export const Destructive: Props = {
  args: {
    intent: "destructive",
  },
};

export const Outline: Props = {
  args: {
    intent: "outline",
  },
};
