"""
Sovereign Agent - The Unified Agentic Brain
Why: Orchestrates between Chat, Workflows, and Dashboards.
"""
import logging
from src.automation.mjolnir_client import MjolnirClient

class SovereignAgent:
    def __init__(self):
        self.mjolnir = MjolnirClient()
        self.logger = logging.getLogger("gungnir.sovereign")

    async def process_chat(self, user_id: str, message: str):
        self.logger.info(f"Processing message from {user_id}: {message}")
        
        # Intent Classification (Mock)
        if "build" in message.lower() or "workflow" in message.lower():
            return await self.handle_workflow_request(message)
        elif "show" in message.lower() or "dashboard" in message.lower():
            return "I have updated the Dashboard view with the latest metrics from Salesforce and AWS."
        else:
            return f"Understood, Ankur. I am ready to execute your commands within the Sovereign OS."

    async def handle_workflow_request(self, prompt: str):
        self.logger.info(f"Generating workflow for: {prompt}")
        # In a real scenario, we'd use an LLM here to generate the workflow JSON
        # and then send it to Mjolnir for registration.
        # For now, we use the Mjolnir generation endpoint.
        
        async with httpx.AsyncClient() as client:
            response = await client.post("http://mjolnir-engine:8004/workflow/generate", json={"prompt": prompt})
            workflow_data = response.json()
            
        return f"I have designed a new workflow for you: **{workflow_data['workflow']['name']}**. You can view and modify it in the Workflow tab."

