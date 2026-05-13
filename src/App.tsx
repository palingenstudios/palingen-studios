import React, { useState, useCallback } from 'react';
import { CosmicNode, getLiveNodes } from './data/cosmicNodes';
import CosmicMap from './components/CosmicMap';
import NodeCard from './components/NodeCard';
import Navigation from './components/Navigation';
import AdminPanel from './components/AdminPanel';

function isAdminHash(): boolean {
  return window.location.hash === '#admin';
}

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<CosmicNode | null>(null);
  const [showAdmin, setShowAdmin] = useState<boolean>(isAdminHash);

  // Listen for hash changes so navigating to /#admin opens the panel
  React.useEffect(() => {
    const onHash = () => setShowAdmin(isAdminHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleNodeClick = useCallback((node: CosmicNode) => {
    setSelectedNode(prev => (prev?.id === node.id ? null : node));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleAdminClose = useCallback(() => {
    window.location.hash = '';
    setShowAdmin(false);
  }, []);

  const liveNodes = getLiveNodes();

  if (showAdmin) {
    return <AdminPanel onClose={handleAdminClose} />;
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#03040e' }}>
      <Navigation />
      <CosmicMap nodes={liveNodes} onNodeClick={handleNodeClick} />
      <NodeCard node={selectedNode} allNodes={liveNodes} onClose={handleClose} />
    </div>
  );
};

export default App;
