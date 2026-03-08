const NodeRegistry = require('../nodes/Registry');
const ReportingBridge = require('../reporting/ReportingBridge');

class WorkflowExecutor {
  async run(dag) {
    const { nodes, edges } = dag;
    const results = {};
    const startTime = Date.now();

    try {
      // Very simple execution loop (linear)
      for (const node of nodes) {
        const nodeType = NodeRegistry[node.type];
        if (nodeType) {
          results[node.id] = await nodeType.execute(node, results);
        }
      }
      
      const duration = Date.now() - startTime;
      await ReportingBridge.logExecution(dag.id, 'success', duration);
      return results;
    } catch (error) {
      console.error("[Mjolnir] Workflow failed:", error);
      await ReportingBridge.logExecution(dag.id, 'error', Date.now() - startTime);
      throw error;
    }
  }
}

module.exports = new WorkflowExecutor();
