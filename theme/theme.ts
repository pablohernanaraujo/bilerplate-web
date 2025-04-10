import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { semanticTokens } from './semantic-tokens';
import { tokens } from './tokens';

const config = defineConfig({
  globalCss: {
    body: {
      backgroundColor: 'background',
    },
  },
  theme: {
    tokens: tokens,
    semanticTokens: semanticTokens,
  },
});

export const system = createSystem(defaultConfig, config);
