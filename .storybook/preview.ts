import type { Preview } from '@storybook/react';
import '../src/assets/css/global.css';
import 'react-tooltip/dist/react-tooltip.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
