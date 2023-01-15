import React from 'react';
import { version, author } from '../package.json';
import { Box, VStack, Divider, Center, Text, useColorMode } from 'native-base';
import CGCMainContext from '../context/CGCMainContext';

const DrawerFooter = () => {
  const { getLabel } = React.useContext(CGCMainContext);
  const { colorMode } = useColorMode();
  return (
    <Box
      variant="card"
      w="90%"
      left="5%"
      marginTop={5}
      bg={colorMode === 'dark' ? 'primaryDark.50' : 'gray.100'}
    >
      <VStack alignContent="center">
        <Center marginTop={2}>
          <Text color="primary.600" bold fontSize={12}>
            {author.name || 'CGCApps'} © {new Date().getFullYear()}
          </Text>
        </Center>

        <Center>
          <Text color="info.800" bold fontSize={12}>
            {author.url || 'https://cgcapps.cl'}
          </Text>
        </Center>

        <Center>
          <Text color="danger.500" fontSize={11}>
            {getLabel('version')} {version}
          </Text>
        </Center>
      </VStack>
    </Box>
  );
};

export default DrawerFooter;
