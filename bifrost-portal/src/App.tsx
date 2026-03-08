import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import ChatContainer from './components/chat/ChatContainer';
import WorkflowCanvas from './components/workflow/WorkflowCanvas';
import DashboardLayout from './components/dashboard/DashboardLayout';

const App = () => {
  const [view, setView] = useState('chat');

  const renderView = () => {
    switch (view) {
      case 'chat': return <ChatContainer />;
      case 'workflow': return <WorkflowCanvas />;
      case 'dashboard': return <DashboardLayout />;
      case 'connectors': return <div className="p-10 text-2xl font-bold">Connectors Management (Coming Soon)</div>;
      default: return <ChatContainer />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar currentView={view} setView={setView} />
      <main className="flex-1 overflow-hidden relative">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
