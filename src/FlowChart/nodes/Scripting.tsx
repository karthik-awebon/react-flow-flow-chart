import { Flex, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const Scripting = ({ id }: { id: string }) => {
  const { setNodes, getEdges, setEdges } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '6') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: {},
          type: 'scripting',
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
        bg='#fbf0ff'
        border='2px solid #cccccc'
        p={2}
        gap={2}
        width='155px'
        height='50px'
      >
        <Text textAlign={'center'}>Scripting</Text>
      </Flex>

      <Handle type='target' id='a' position={Position.Right} />
      <Handle type='target' id='b' position={Position.Left} />
      <Handle type='source' position={Position.Bottom} />
    </Flex>
  );
};

export default Scripting;
