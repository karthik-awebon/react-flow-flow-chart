import { Flex, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import {
  Connection,
  Handle,
  MarkerType,
  Position,
  addEdge,
  useReactFlow,
} from 'reactflow';

const AssignValues = ({ id }: { id: string }) => {
  const { setNodes, getEdges, setEdges } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '7') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: {},
          type: 'assignvalues',
          position: { x: location, y: location },
        },
      ]);
    }
  };

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        id: `${getEdges().length + 1}`,
        type: 'step',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 25,
          height: 15,
          color: '#ff8ee2',
        },
        style: {
          strokeWidth: 2,
          stroke: '#ff8ee2',
        },
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [getEdges, setEdges]
  );

  return (
    <Flex
      flexDir={'column'}
      justifyItems={'center'}
      alignItems={'center'}
      onClick={() => onProviderClick(id)}
    >
      <Flex
        width={'15px'}
        height={'0px'}
        borderTop={'7px solid #6463ff'}
        borderLeft={'4px solid transparent'}
        borderRight={'4px solid transparent'}
      ></Flex>
      <Flex width={'7px'} height={'5px'} backgroundColor={'#6463ff'}></Flex>
      <Flex flexDir={'row'} alignItems={'center'} gap={1}>
        <Flex
          width={'5px'}
          height={'10px'}
          backgroundColor={'#6463ff'}
          borderRadius={'3px'}
        ></Flex>
        <Flex
          borderRadius='8px'
          bg='#ffffff'
          border='5px solid #6463ff'
          width='50px'
          height='50px'
          flexDir={'column'}
          alignItems={'center'}
          gap={2}
        >
          <Flex
            width={'15px'}
            height={'15px'}
            bg='#ffffff'
            border='4px solid #6463ff'
          ></Flex>
          <Flex
            flexDir={'row'}
            gap={1}
            width={'100%'}
            justifyContent={'space-around'}
          >
            <Flex
              width={'7px'}
              height={'7px'}
              bg='#6463ff'
              borderRadius={'3px'}
            ></Flex>
            <Flex
              width={'7px'}
              height={'7px'}
              bg='#6463ff'
              borderRadius={'3px'}
            ></Flex>
          </Flex>
        </Flex>
        <Flex
          width={'5px'}
          height={'10px'}
          backgroundColor={'#6463ff'}
          borderRadius={'3px'}
        ></Flex>
      </Flex>
      <Text textAlign={'center'} width='50%'>
        Assign Values
      </Text>
      <Handle type='target' position={Position.Top} />
      <Handle
        type='source'
        style={{ bottom: 45 }}
        position={Position.Bottom}
        onConnect={onConnect}
      />
    </Flex>
  );
};

export default AssignValues;
