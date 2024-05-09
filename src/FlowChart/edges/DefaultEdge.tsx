import { EdgeProps, MarkerType, StepEdge, getBezierPath } from 'reactflow';

export default function DefaultEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <StepEdge
        {...props}
        style={{
          strokeWidth: 2,
          stroke: '#000000',
        }}
      />
    </>
  );
}
