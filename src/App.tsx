import React, { useState, useCallback } from 'react';
import { CosmicNode, NODES } from './data/cosmicNodes';
import CosmicMap from './components/CosmicMap';
import NodeCard from './components/NodeCard';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<CosmicNode | null>(null);

  const handleNodeClick = useCallback((node: CosmicNode) => {
    setSelectedNode(prev => (prev?.id === node.id ? null : node));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#03040e' }}>
      <Navigation />
      <CosmicMap onNodeClick={handleNodeClick} />
      <NodeCard node={selectedNode} allNodes={NODES} onClose={handleClose} />
    </div>
  );
};

export default App;
