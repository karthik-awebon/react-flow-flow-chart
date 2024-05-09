import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const Database = ({ id }: { id: string }) => {
  const { setNodes } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '3') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: {},
          type: 'database',
          position: { x: location, y: location },
        },
      ]);
    }
  };
  return (
    <Flex flexDir={'column'} onClick={() => onProviderClick(id)}>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius='8px'
        bg='#fef0ef'
        border='2px solid #cccccc'
        p={2}
        gap={2}
        width='155px'
        height='50px'
      >
        {' '}
        <Text textAlign={'center'}>Database</Text>
      </Flex>

      <Handle type='target' position={Position.Top} />
      <Handle type='source' position={Position.Bottom} />
    </Flex>
  );
};

export default Database;
