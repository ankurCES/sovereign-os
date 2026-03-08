"""
Sovereign Agent - The Unified Agentic Brain
Why: Advanced intent classification and workflow synthesis.
"""
import logging
import httpx
import json

class SovereignAgent:
    def __init__(self):
        self.logger = logging.getLogger("gungnir.sovereign")

    async def process_chat(self, user_id: str, message: str):
        msg_lower = message.lower()
        
        # 1. Dashboard Intent
        if any(word in msg_lower for word in ["show", "dashboard", "metrics", "analytics"]):
            return {
                "role": "assistant",
                "content": "Accessing the Intelligence Realm... I've updated your Dashboard with the latest revenue and workflow performance metrics.",
                "view_switch": "dashboard"
            }
        
        # 2. Workflow Intent
        if any(word in msg_lower for word in ["build", "create", "workflow", "automation", "pipeline"]):
            return await self.synthesize_workflow(message)
        
        # 3. Connector Intent
        if any(word in msg_lower for word in ["connect", "connector", "integration"]):
            return {
                "role": "assistant",
                "content": "The Imperial Channels are open. You have active connectors for Salesforce, Snowflake, AWS, and SAP. Which one would you like to configure?"
            }

        # Default Chat
        return {
            "role": "assistant",
            "content": f"Odin hears you, Ankur. Your command '{message}' is noted. I am standing by for complex orchestration or data analysis."
        }

    async def synthesize_workflow(self, prompt: str):
        self.logger.info(f"Synthesizing workflow: {prompt}")
        
        # Call Mjolnir Engine to generate the DAG
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post("http://mjolnir-engine:8004/api/workflow/generate", json={"prompt": prompt}, timeout=10.0)
                data = response.json()
                return {
                    "role": "assistant",
                    "content": f"I have synthesized a new workflow: **{data['workflow']['name']}**. You can now modify it in the Workflow Canvas or execute it directly.",
                    "workflow_id": data['id'],
                    "view_switch": "workflow"
                }
            except Exception as e:
                self.logger.error(f"Failed to generate workflow: {e}")
                return {"role": "assistant", "content": "I encountered an error while forging the workflow. Please check the Mjolnir Engine logs."}
