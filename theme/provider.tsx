'use client';

import { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { ColorModeProvider, type ColorModeProviderProps } from '../ui';
import { system } from './theme';

export const Provider: FC<PropsWithChildren<ColorModeProviderProps>> = (
  props,
) => (
  <ChakraProvider value={system}>
    <ColorModeProvider {...props} />
  </ChakraProvider>
);
