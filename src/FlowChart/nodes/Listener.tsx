import { Flex, Text } from '@chakra-ui/react';
import { Handle, Position, useReactFlow } from 'reactflow';

const Listener = ({ id }: { id: string }) => {
  const { setNodes } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '1') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => {
        console.log(prevNodes);
        return [
          ...prevNodes,
          {
            id: `${prevNodes.length + 1}`,
            data: {},
            type: 'listener',
            position: { x: location, y: location },
          },
        ];
      });
    }
  };
  return (
    <Flex flexDir={'column'} onClick={() => onProviderClick(id)}>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius='8px'
        bg='#edf5ff'
        border='2px solid #cccccc'
        p={2}
        gap={2}
        width='155px'
        height='50px'
      >
        <Text textAlign={'center'}>Listener</Text>
      </Flex>

      <Handle type='source' position={Position.Bottom} />
    </Flex>
  );
};

export default Listener;
