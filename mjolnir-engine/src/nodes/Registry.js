/**
 * Mjolnir Node Registry
 * Why: Defines all available nodes and their logic.
 */
const axios = require('axios');

const NodeRegistry = {
  'trigger': {
    execute: async (data) => data
  },
  'llm': {
    execute: async (node, prevResults) => {
      console.log(`[Mjolnir] Executing LLM Node: ${node.data.label}`);
      // Future: Call Gungnir Brain /api/chat
      return { response: "AI analyzed output for: " + node.data.prompt };
    }
  },
  'sfdc-connector': {
    execute: async (node, prevResults) => {
      console.log(`[Mjolnir] Executing Salesforce Connector`);
      const response = await axios.post('http://valkyrie-connectors:8003/connect/salesforce/account', {
        instance_url: node.data.instance_url,
        account_id: node.data.account_id
      });
      return response.data;
    }
  },
  'postgres-connector': {
    execute: async (node, prevResults) => {
      const response = await axios.post('http://valkyrie-connectors:8003/connect/postgres/query', {
        sql: node.data.sql,
        config: node.data.config
      });
      return response.data;
    }
  }
};

module.exports = NodeRegistry;
