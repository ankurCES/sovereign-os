<script>
  import ChartWidget from '../../components/dashboard/ChartWidget.svelte';
  import { LayoutDashboard, Download, Filter, RefreshCcw } from 'lucide-svelte';

  const stats = [
    { title: 'Total Revenue', value: '$2.4M', trend: '+12%', color: 'border-blue-500' },
    { title: 'Workflow Success', value: '99.2%', trend: '+0.5%', color: 'border-emerald-500' },
    { title: 'Active Nodes', value: '156', trend: 'Stable', color: 'border-amber-500' }
  ];
</script>

<div class="h-full bg-slate-950 overflow-y-auto p-8">
  <div class="flex justify-between items-center mb-10">
    <div class="flex items-center space-x-3">
      <div class="bg-blue-600/20 p-2 rounded-lg"><LayoutDashboard class="text-blue-500" /></div>
      <h2 class="text-2xl font-bold text-white tracking-tight">Enterprise Intelligence</h2>
    </div>
    <div class="flex space-x-3">
      <button class="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 hover:bg-slate-800 transition-all text-sm">
        <Filter size={16}/><span>Filters</span>
      </button>
      <button class="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-xl text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all text-sm font-medium">
        <Download size={16}/><span>Export Report</span>
      </button>
    </div>
  </div>

  <!-- Metric Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {#each stats as stat}
      <div class="bg-slate-900 border border-slate-800 {stat.color} border-l-4 rounded-2xl p-6 shadow-lg">
        <p class="text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
        <div class="flex justify-between items-end">
          <h3 class="text-3xl font-bold text-white">{stat.value}</h3>
          <span class="text-xs font-bold px-2 py-1 rounded bg-slate-800 {stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-slate-400'}">
            {stat.trend}
          </span>
        </div>
      </div>
    {/each}
  </div>

  <!-- Charts -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <ChartWidget title="Workflow Execution Volume" />
    <ChartWidget title="Agentic Token Consumption" />
  </div>
</div>
