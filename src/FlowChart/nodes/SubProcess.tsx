import { Flex, Text } from '@chakra-ui/react';
import { Handle, Position, useReactFlow } from 'reactflow';

const SubProcess = ({ id }: { id: string }) => {
  const { setNodes } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '2') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: {},
          type: 'subprocess',
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
        bg='#d7faf4'
        border='2px solid #cccccc'
        p={2}
        gap={2}
        width='155px'
        height='50px'
      >
        <Text textAlign={'center'}>Sub Process</Text>
      </Flex>

      <Handle type='target' position={Position.Top} />
      <Handle type='source' position={Position.Bottom} />
    </Flex>
  );
};

export default SubProcess;
