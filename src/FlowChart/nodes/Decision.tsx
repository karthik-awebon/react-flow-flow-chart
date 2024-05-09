import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import {
  Connection,
  Handle,
  MarkerType,
  Position,
  addEdge,
  useReactFlow,
} from 'reactflow';

const Decision = ({ id }: { id: string }) => {
  const { setNodes, setEdges, getEdges } = useReactFlow();
  const onProviderClick = (id: string) => {
    if (id === '4') {
      const location = Math.random() * 500;

      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: {},
          type: 'decision',
          position: { x: location, y: location },
        },
      ]);
    }
  };
  const onYesConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        id: `${getEdges().length + 1}`,
        type: 'step',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 25,
          height: 15,
          color: '#018a0e',
        },
        style: {
          strokeWidth: 2,
          stroke: '#018a0e',
        },
        label: 'yes',
        labelStyle: {
          fontSize: 15,
        },
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [getEdges, setEdges]
  );
  const onNoConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        id: `${getEdges().length + 1}`,
        type: 'step',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 25,
          height: 15,
          color: '#e91514',
        },
        style: {
          strokeWidth: 2,
          stroke: '#e91514',
        },
        label: 'no',
        labelStyle: {
          fontSize: 15,
        },
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [getEdges, setEdges]
  );
  return (
    <Flex position={'relative'} onClick={() => onProviderClick(id)}>
      <Box
        bg='#FFFFFF'
        width='100px'
        height='50px'
        borderColor={'#cccccc'}
        borderWidth={'2px'}
        transform={'skewX(-40deg) rotate(22.5deg)'}
        marginLeft={'11px'}
      ></Box>
      <Text
        position={'absolute'}
        top={'50%'}
        left={'48%'}
        transform={'translate(-32%, -50%)'}
      >
        Decision
      </Text>
      <Handle
        type='target'
        style={{ top: -20, left: '53%' }}
        position={Position.Top}
      />
      <Handle
        type='source'
        id='a'
        style={{ left: '1%', top: '53%' }}
        position={Position.Left}
        onConnect={onYesConnect}
      />
      <Handle
        type='source'
        id='b'
        style={{ right: '-9%', top: '46%' }}
        position={Position.Right}
        onConnect={onNoConnect}
      />
    </Flex>
  );
};

export default Decision;
