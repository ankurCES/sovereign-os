import React, { useState } from 'react';
import { Send, Plus, User, Bot } from 'lucide-react';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hail, Ankur. I am the Sovereign Brain. How can I assist you with your workflows or data today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    // Call Gungnir-Core API here
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-3xl space-x-4 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200' : 'bg-blue-600 text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-900'}`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t bg-slate-50">
        <div className="max-w-4xl mx-auto flex items-center space-x-4 bg-white border rounded-xl p-2 shadow-sm">
          <button className="p-2 text-slate-400 hover:text-blue-600"><Plus size={20}/></button>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything or command a workflow..." 
            className="flex-1 bg-transparent border-none outline-none text-slate-900" 
          />
          <button onClick={handleSend} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
