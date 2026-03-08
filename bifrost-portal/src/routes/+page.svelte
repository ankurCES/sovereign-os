<script>
  import { Send, Plus, Bot, User, Cpu, Layers } from 'lucide-svelte';
  import { writable } from 'svelte/store';
  import WorkflowCanvas from '../components/workflow/WorkflowCanvas.svelte';
  import DashboardLayout from '../components/dashboard/DashboardLayout.svelte';

  let messages = writable([
    { role: 'assistant', content: '# Welcome to Sovereign OS\nHow can I help you design workflows or analyze your enterprise data today?', timestamp: '11:15 AM' }
  ]);
  let input = "";
  let activeView = writable('chat'); // 'chat', 'workflow', 'dashboard'

  async function handleSend() {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input, timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
    messages.update(m => [...m, userMsg]);
    const currentInput = input;
    input = "";

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 'ankur', message: currentInput })
      });
      const data = await response.json();
      
      messages.update(m => [...m, { 
        role: 'assistant', 
        content: data.content, 
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
      }]);

      if (data.view_switch) {
        setTimeout(() => activeTab.set(data.view_switch), 1500);
      }
    } catch (err) {
      console.error("Chat error:", err);
    }
  }
</script>

<div class="flex h-full flex-col bg-slate-950">
  {#if $activeTab === 'chat'}
    <!-- Chat UI -->
    <header class="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-8 py-4 backdrop-blur-md">
      <div class="flex items-center space-x-4">
        <div class="rounded-lg bg-slate-800 p-2"><Cpu size={18} class="text-blue-400" /></div>
        <div>
          <h2 class="text-sm font-semibold text-white">Sovereign Brain</h2>
          <p class="text-xs text-slate-500">GPT-4o • Enterprise Agent</p>
        </div>
      </div>
    </header>

    <div class="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
      <div class="mx-auto max-w-4xl space-y-8">
        {#each $messages as msg}
          <div class="flex {msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div class="flex max-w-[85%] space-x-4 {msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}">
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-sm">
                {#if msg.role === 'user'}<User size={18} class="text-slate-300"/>{:else}<Bot size={18} class="text-blue-500"/>{/if}
              </div>
              <div class="space-y-1">
                <div class="rounded-2xl p-4 shadow-sm {msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-900 border border-slate-800 text-slate-200'}">
                  <p class="text-[15px] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
                <p class="text-[10px] font-medium text-slate-600 uppercase tracking-tighter {msg.role === 'user' ? 'text-right' : 'text-left'}">{msg.timestamp}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="p-8">
      <div class="mx-auto max-w-4xl relative">
        <div class="relative flex items-center rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-2xl focus-within:border-blue-500/50 transition-all duration-200">
          <button class="p-3 text-slate-500 hover:text-blue-500"><Plus size={22}/></button>
          <textarea 
            bind:value={input}
            on:keydown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="Command your enterprise..." 
            class="flex-1 bg-transparent py-3 px-2 text-slate-200 outline-none placeholder:text-slate-600 resize-none h-12"
          ></textarea>
          <button on:click={handleSend} class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  {:else if $activeTab === 'workflow'}
    <WorkflowCanvas />
  {:else if $activeTab === 'dashboard'}
    <DashboardLayout />
  {/if}
</div>
