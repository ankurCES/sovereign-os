/**
 * Mjolnir Node Registry
 * Why: Standardizes the inputs/outputs for all enterprise connectors.
 */
const NodeRegistry = {
  'webhook-trigger': {
    type: 'trigger',
    outputs: ['body', 'headers', 'query'],
  },
  'sfdc-search': {
    type: 'connector',
    inputs: ['query'],
    outputs: ['records'],
  },
  'slack-notify': {
    type: 'connector',
    inputs: ['message', 'channel'],
    outputs: ['status'],
  },
  'ai-agent': {
    type: 'agent',
    inputs: ['prompt', 'context'],
    outputs: ['response', 'next_action'],
  }
};

module.exports = NodeRegistry;
