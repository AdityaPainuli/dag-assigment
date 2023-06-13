import React , {useCallback , useState , useRef} from 'react';
import ReactFlow , { 
  Background,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  updateEdge
} from 'reactflow';


import 'reactflow/dist/style.css';
import SidebarRight from '../SidebarRight/SidebarRight';


const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () =>  `dndnode_${id++}`;

const WorkflowGraph = () => {
  const reactFlowWrapper = useRef<any>(null);
  const edgeUpdateSuccessful = useRef<boolean>(true);
  const [nodes, setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges , onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance , setReactFlowInstance] = useState<any>(null);
  const [variant, setVariant] = useState('cross');
  

  

  const onConnect = useCallback((params:any) => setEdges((eds) => addEdge(params, eds)), []);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);
//@ts-ignore
  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);
// @ts-ignore
  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);


  const onDragOver = useCallback((event:any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event:any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );


  return (
    <div className = "workflow-container dndFlow">
      <ReactFlowProvider>
        <div className = "reactflow-wrapper" ref = {reactFlowWrapper} >
        <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onConnect={onConnect}
            onEdgeUpdate={onEdgeUpdate}
            onEdgeUpdateStart={onEdgeUpdateStart}
            onEdgeUpdateEnd={onEdgeUpdateEnd}
            fitView
            >
        <Background color= "#2a2828" />
        {/* <Controls /> */}
      </ReactFlow>
        </div>
        <SidebarRight/>
      </ReactFlowProvider>
    </div>
  )
}

export default WorkflowGraph;