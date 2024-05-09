import { useCallback } from 'react';
import ReactFlow, {
  Connection,
  MarkerType,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import {
  initialNodes,
  initialEdges,
  nodeTypes,
  edgeTypes,
} from './FlowChart.Constants';

const FlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        id: `${edges.length + 1}`,
        type: 'defaultedge',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 25,
          height: 15,
          color: 'black',
        },
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges]
  );
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      />
    </div>
  );
};

export default FlowChart;
