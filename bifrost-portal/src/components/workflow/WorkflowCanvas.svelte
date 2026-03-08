<script>
  import { GitBranch, Play, Save, Plus, Share2 } from 'lucide-svelte';
</script>

<div class="h-full flex flex-col bg-slate-950">
  <div class="p-6 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <div class="bg-blue-600/20 p-2 rounded-lg"><GitBranch class="text-blue-500" size={18} /></div>
      <h2 class="text-lg font-bold text-white tracking-tight">Active Workflow Engine</h2>
    </div>
    <div class="flex space-x-3">
       <button class="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-700 transition-all flex items-center space-x-2">
         <Save size={16} /><span>Save DAG</span>
       </button>
       <button class="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all flex items-center space-x-2">
         <Play size={16} /><span>Execute</span>
       </button>
    </div>
  </div>

  <div class="flex-1 relative bg-slate-950 overflow-hidden" style="background-image: radial-gradient(circle, #1e293b 1px, transparent 1px); background-size: 30px 30px;">
    <!-- Node Mocks -->
    <div class="absolute top-20 left-20 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl w-64 border-l-4 border-blue-500">
      <div class="flex justify-between items-center mb-4">
        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Trigger</span>
        <div class="bg-blue-500/10 p-1.5 rounded"><GitBranch size={14} class="text-blue-500" /></div>
      </div>
      <h3 class="font-bold text-white">Chat Command</h3>
      <p class="text-xs text-slate-400 mt-2">Input: "Analyze Salesforce leads"</p>
    </div>

    <div class="absolute top-20 left-[400px] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl w-64 border-l-4 border-amber-500">
      <div class="flex justify-between items-center mb-4">
        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connector</span>
        <div class="bg-amber-500/10 p-1.5 rounded"><Share2 size={14} class="text-amber-500" /></div>
      </div>
      <h3 class="font-bold text-white">Salesforce Connector</h3>
      <p class="text-xs text-slate-400 mt-2">Action: Search Records</p>
    </div>

    <div class="absolute bottom-10 right-10">
      <button class="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-blue-500 transition-all">
        <Plus size={28} />
      </button>
    </div>
  </div>
</div>
