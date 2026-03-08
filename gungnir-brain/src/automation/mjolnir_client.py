"""
Mjolnir Client for Project Gungnir.
Author: Tesla (Architect) / Lu Bu (Lead Dev)
Why: Enables the Agentic Brain to trigger complex visual workflows in the Mjolnir Engine.
"""
import httpx
import logging

class MjolnirClient:
    def __init__(self, base_url: str = "http://mjolnir-engine:8002"):
        self.base_url = base_url
        self.logger = logging.getLogger("gungnir.automation")

    async def trigger_workflow(self, workflow_id: str, payload: dict):
        self.logger.info(f"Triggering Mjolnir workflow: {workflow_id}")
        async with httpx.AsyncClient() as client:
            response = await client.post(f"{self.base_url}/workflow/execute/{workflow_id}", json=payload)
            return response.json()

