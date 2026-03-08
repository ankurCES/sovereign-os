/**
 * Mjolnir Execution Engine
 * Why: Handles the sequential/parallel execution of workflow nodes.
 */
const NodeRegistry = require('../nodes/Registry');

class WorkflowEngine {
  async execute(workflow, initialData = {}) {
    console.log(`[Mjolnir] Starting execution of workflow: ${workflow.name}`);
    let currentState = initialData;
    
    // Simple linear execution for Phase 1
    for (const node of workflow.nodes) {
      console.log(`[Mjolnir] Executing node: ${node.type} (${node.id})`);
      const nodeDef = NodeRegistry[node.type];
      
      if (!nodeDef) {
        throw new Error(`Node type ${node.type} not found in registry`);
      }
      
      // Mock execution
      currentState = { ...currentState, [node.id]: { status: 'success', data: 'Mock Data' } };
    }
    
    return currentState;
  }
}

module.exports = new WorkflowEngine();
