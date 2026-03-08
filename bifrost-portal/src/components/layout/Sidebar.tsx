import React from 'react';
import { MessageSquare, GitBranch, LayoutDashboard, Share2, Settings, ShieldCheck } from 'lucide-react';

const Sidebar = ({ currentView, setView }) => {
  const items = [
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'workflow', label: 'Workflows', icon: GitBranch },
    { id: 'dashboard', label: 'Dashboards', icon: LayoutDashboard },
    { id: 'connectors', label: 'Connectors', icon: Share2 },
  ];

  return (
    <div className="w-64 bg-slate-900 h-screen text-white flex flex-col border-r border-slate-800">
      <div className="p-6 flex items-center space-x-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <ShieldCheck size={20} />
        </div>
        <h1 className="text-xl font-bold tracking-tight">SOVEREIGN</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              currentView === item.id ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center space-x-3 p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
