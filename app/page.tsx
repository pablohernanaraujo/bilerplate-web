import { type FC } from 'react';
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';

import { ColorModeButton } from '@/ui/color-mode';

const Home: FC = () => (
  <Box bg="background" h="100vh" w="100vw">
    <Stack>
      <Text textStyle="xs">Chakra</Text>
      <Text textStyle="sm">Chakra</Text>
      <Text textStyle="md">Chakra</Text>
      <Text textStyle="lg">Chakra</Text>
      <Text textStyle="xl">Chakra</Text>
      <Text textStyle="2xl">Chakra</Text>
      <Text textStyle="3xl">Chakra</Text>
      <Text textStyle="4xl">Chakra</Text>
      <Text textStyle="5xl">Chakra</Text>
      <Text textStyle="6xl">Chakra</Text>
      <Text textStyle="7xl">Chakra</Text>
    </Stack>

    <HStack>
      <Button>Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="solid" colorPalette="brand">
        Click me
      </Button>
      <Button variant="ghost" colorPalette="brand">
        Click me
      </Button>
      <Button variant="outline" colorPalette="brand">
        Click me
      </Button>
      <ColorModeButton />
    </HStack>
  </Box>
);

export default Home;
