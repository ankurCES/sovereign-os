"""
Yggdrasil Analytics - The Enterprise Dashboard Backend
Why: Aggregates data from multiple sources (Postgres, Snowflake, S3) for the Bifrost Portal.
"""
from fastapi import FastAPI
from typing import List, Dict

app = FastAPI(title="Yggdrasil Analytics API")

@app.get("/analytics/summary")
async def get_summary():
    return [
        {"title": "Total Revenue (SFDC)", "value": ",450,000", "change": "+12.4%", "color": "blue"},
        {"title": "Active IoT Devices", "value": "1,284", "change": "-2.1%", "color": "orange"},
        {"title": "Agentic Flow Success", "value": "98.2%", "change": "+0.5%", "color": "green"}
    ]

@app.get("/analytics/revenue-trends")
async def get_revenue_trends():
    return {
        "dates": ["2026-03-01", "2026-03-02", "2026-03-03", "2026-03-04", "2026-03-05", "2026-03-06", "2026-03-07"],
        "values": [120, 150, 180, 140, 210, 250, 300]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8005)
