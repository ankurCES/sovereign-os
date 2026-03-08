const express = require('express');
const { v4: uuidv4 } = require('uuid');
const engine = require('./execution/Engine');
const app = express();
app.use(express.json());

const workflows = {};

app.post('/workflow/register', (req, res) => {
    const id = uuidv4();
    workflows[id] = { ...req.body, id };
    console.log(`[Mjolnir] Registered workflow: ${req.body.name} (${id})`);
    res.json({ id, status: 'registered' });
});

app.post('/workflow/execute/:id', async (req, res) => {
    const workflow = workflows[req.params.id];
    if (!workflow) return res.status(404).send('Workflow not found');
    
    try {
        const result = await engine.execute(workflow, req.body.data);
        res.json({ status: 'success', result });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

// AI Generation Endpoint
app.post('/workflow/generate', (req, res) => {
    const { prompt } = req.body;
    console.log(`[Mjolnir] AI Generating workflow from prompt: ${prompt}`);
    
    // Mock AI Generation (This would be called by Gungnir-Core)
    const mockWorkflow = {
        name: `AI Generated: ${prompt.substring(0, 20)}...`,
        nodes: [
            { id: 'n1', type: 'webhook-trigger' },
            { id: 'n2', type: 'ai-agent', params: { prompt: prompt } },
            { id: 'n3', type: 'slack-notify', params: { channel: '#alerts' } }
        ]
    };
    
    const id = uuidv4();
    workflows[id] = { ...mockWorkflow, id };
    res.json({ id, workflow: workflows[id] });
});

const PORT = process.env.PORT || 8004;
app.listen(PORT, () => console.log(`Mjolnir Engine live on port ${PORT}`));
