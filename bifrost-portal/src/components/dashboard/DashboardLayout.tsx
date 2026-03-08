import React from 'react';
import { LayoutDashboard, Download, Filter, RefreshCw } from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className="h-full bg-slate-50 overflow-y-auto">
      <div className="p-6 flex justify-between items-center bg-white border-b sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
          <LayoutDashboard className="text-blue-600" />
          <span>Executive Intelligence Overview</span>
        </h2>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><Filter size={20}/></button>
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><RefreshCw size={20}/></button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Total Revenue (SFDC)', value: '$2.4M', change: '+12%', color: 'blue' },
          { title: 'Active IoT Devices', value: '1,284', change: '-3%', color: 'orange' },
          { title: 'Agentic Flow Success', value: '98.2%', change: '+0.5%', color: 'green' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              <span className={`text-sm font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</span>
            </div>
          </div>
        ))}
        
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border h-80 flex items-center justify-center">
           <p className="text-slate-400 font-medium">Revenue Trends (ECharts Visualization Placeholder)</p>
        </div>
        
        <div className="col-span-1 bg-white p-6 rounded-2xl shadow-sm border h-80 flex items-center justify-center">
           <p className="text-slate-400 font-medium">Connector Distribution (Pie Chart)</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
