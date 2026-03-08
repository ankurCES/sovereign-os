import React from 'react';
import { GitBranch, Plus, Play, Save } from 'lucide-react';

const WorkflowCanvas = () => {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="p-4 bg-white border-b flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h2 className="text-lg font-semibold text-slate-900">Enterprise Sync Pipeline</h2>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">ACTIVE</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <Play size={16} />
            <span>Execute</span>
          </button>
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><Save size={20}/></button>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden bg-slate-100 pattern-grid">
        {/* React Flow Canvas would go here */}
        <div className="absolute top-10 left-10 p-6 bg-white border rounded-xl shadow-lg w-64 border-l-4 border-blue-600">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trigger</span>
            <GitBranch size={16} className="text-blue-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Webhook Trigger</h3>
          <p className="text-xs text-slate-500 mt-2">Listening on /api/v1/sfdc-sync</p>
        </div>
        
        <div className="absolute top-10 left-96 p-6 bg-white border rounded-xl shadow-lg w-64 border-l-4 border-orange-500">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connector</span>
            <Share2 size={16} className="text-orange-500" />
          </div>
          <h3 className="font-semibold text-slate-900">Salesforce Search</h3>
          <p className="text-xs text-slate-500 mt-2">Query: SELECT Name FROM Lead</p>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col space-y-2">
           <button className="w-12 h-12 bg-white border rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-slate-50"><Plus size={24}/></button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCanvas;
