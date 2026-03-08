"""
Valkyrie Connectors API
Why: Provides a unified API for all enterprise and cloud connectors.
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List
from src.connectors.postgres import PostgresConnector
from src.connectors.mongodb import MongoDBConnector
from src.connectors.salesforce import SalesforceConnector
from src.connectors.snowflake import SnowflakeConnector

app = FastAPI(title="Valkyrie Connectors")

@app.post("/connect/postgres/query")
async def postgres_query(request: Dict[str, Any]):
    connector = PostgresConnector(request.get("config", {}))
    return connector.query(request.get("sql", ""))

@app.post("/connect/salesforce/account")
async def sfdc_account(request: Dict[str, Any]):
    connector = SalesforceConnector(request.get("instance_url", ""))
    return connector.get_account_details(request.get("account_id", ""))

@app.post("/connect/snowflake/query")
async def snowflake_query(request: Dict[str, Any]):
    connector = SnowflakeConnector(request.get("account", ""), request.get("warehouse", ""))
    return connector.query(request.get("sql", ""))

from src.connectors.aws import AWSConnector
from src.connectors.azure import AzureConnector
from src.connectors.google_cloud import GCPConnector

@app.post("/connect/aws/s3/list")
async def aws_s3_list(request: Dict[str, Any]):
    connector = AWSConnector(request.get("region", ""), request.get("access_key", ""), request.get("secret_key", ""))
    return await connector.list_s3_buckets()

@app.post("/connect/azure/rg/list")
async def azure_rg_list(request: Dict[str, Any]):
    connector = AzureConnector(request.get("subscription_id", ""))
    return await connector.get_resource_groups()

@app.post("/connect/gcp/gcs/list")
async def gcp_gcs_list(request: Dict[str, Any]):
    connector = GCPConnector(request.get("project_id", ""))
    return await connector.list_gcs_buckets()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)
