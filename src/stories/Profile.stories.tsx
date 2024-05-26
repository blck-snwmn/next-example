import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "../app/profile/_components/Profile";

const meta: Meta<typeof Profile> = {
    title: "profile/Profile",
    component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Primary: Story = {};