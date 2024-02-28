import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Content} from './content';

const meta: Meta<typeof Content> = {
  component: Content,
};

export default meta;

type Story = StoryObj<typeof Content>;

export const Basic: Story = {args: {}};
