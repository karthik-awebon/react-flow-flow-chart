import { ChakraProvider } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from 'reactflow';

import 'reactflow/dist/style.css';
import FlowChart from './FlowChart/FlowChart';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ChakraProvider>
      <FlowChart />
    </ChakraProvider>
  );
}

export default App;
