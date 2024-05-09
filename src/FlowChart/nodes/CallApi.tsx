import { Flex, Text } from '@chakra-ui/react';
import { useReactFlow } from 'reactflow';

const CallApi = ({ id }: { id: string }) => {
  const { setNodes } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '5') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: {},
          type: 'callapi',
          position: { x: location, y: location },
        },
      ]);
    }
  };
  return (
    <Flex flexDir={'column'} onClick={() => onProviderClick(id)}>
      <Flex
        alignItems={'center'}
        borderRadius='8px'
        bg='#fcfcca'
        border='2px solid #cccccc'
        p={2}
        gap={2}
        width='155px'
        height='50px'
      ></Flex>
      <Text textAlign={'center'}>Call Api</Text>
    </Flex>
  );
};

export default CallApi;
