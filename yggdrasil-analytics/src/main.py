"""
Yggdrasil Analytics - The Enterprise Dashboard Backend
Why: Serves dynamic metrics and ECharts data for the Sovereign Portal.
"""
from fastapi import FastAPI
from typing import List, Dict
import random

app = FastAPI(title="Yggdrasil Analytics API")

@app.get("/api/dashboard/summary")
async def get_summary():
    return [
        {"title": "Total Revenue (SFDC)", "value": ".4M", "trend": "+12.4%", "color": "border-blue-500"},
        {"title": "Active IoT Devices", "value": "1,284", "trend": "-2.1%", "color": "border-orange-500"},
        {"title": "Agentic Flow Success", "value": "98.2%", "trend": "+0.5%", "color": "border-emerald-500"}
    ]

@app.get("/api/dashboard/chart-data")
async def get_chart_data():
    return {
        "dates": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "workflows": [random.randint(100, 300) for _ in range(7)],
        "tokens": [random.randint(1000, 5000) for _ in range(7)]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8005)
