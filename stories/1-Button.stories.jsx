import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Compon from "../src/Compon";

/**
 - Use an avatar for attributing actions or content to specific users.
 - The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/

export default {
  title: 'Button',
  parameters: {
    component: Compon,
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
};

/**
 - Use an avatar for attributing actions or content to specific users.
 - The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/

export const myTest = () => <Compon text={"HER"}/>;
// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
//
// export const emoji = () => (
  {/*<Button onClick={action('clicked')}>*/}
  {/*  <span role="img" aria-label="so cool">*/}
      // 😀 😎 👍 💯
    // </span>
  // </Button>
// );
