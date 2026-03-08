<script>
  import { onMount } from 'svelte';
  import * as echarts from 'echarts';

  export let title = "Performance Trends";
  let chartDom;
  let chart;

  onMount(async () => {
    chart = echarts.init(chartDom);
    // Mock fetch
    const option = {
      title: { text: '' },
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Workflows', type: 'line', smooth: true, data: [120, 132, 101, 134, 90, 230, 210], color: '#3b82f6' }
      ]
    };
    chart.setOption(option);
    
    window.addEventListener('resize', () => chart.resize());
  });
</script>

<div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
  <h3 class="text-slate-100 font-semibold mb-6">{title}</h3>
  <div bind:this={chartDom} class="h-64 w-full"></div>
</div>
