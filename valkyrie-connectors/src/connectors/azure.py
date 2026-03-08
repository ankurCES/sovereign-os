"""
Azure Connector for Project Gungnir.
Author: Hermes (Messenger of the Gods)
Why: Bridge Gungnir with Microsoft Azure Cloud services.
"""
import logging

class AzureConnector:
    def __init__(self, subscription_id: str):
        self.subscription_id = subscription_id
        self.logger = logging.getLogger("hermes.azure")

    async def get_resource_groups(self):
        self.logger.info("Fetching Azure Resource Groups")
        return ["rg-enterprise-core", "rg-ai-edge"]
