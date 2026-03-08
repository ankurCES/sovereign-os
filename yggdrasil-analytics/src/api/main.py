"""
Yggdrasil Analytics API
Why: Serves dynamic data for ECharts widgets.
"""
from fastapi import FastAPI
from typing import List, Dict

app = FastAPI(title="Yggdrasil Analytics")

@app.get("/api/dashboard/metrics")
async def get_metrics():
    return [
        {"id": "m1", "title": "Total Revenue", "value": ".4M", "trend": "+12%", "color": "#3b82f6"},
        {"id": "m2", "title": "Workflow Success", "value": "99.2%", "trend": "+0.5%", "color": "#10b981"},
        {"id": "m3", "title": "Active Connectors", "value": "12", "trend": "Stable", "color": "#f59e0b"}
    ]

@app.get("/api/dashboard/chart-data")
async def get_chart_data():
    return {
        "categories": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "series": [
            {"name": "Execution Time (ms)", "data": [120, 132, 101, 134, 90, 230, 210]},
            {"name": "Token Usage", "data": [220, 182, 191, 234, 290, 330, 310]}
        ]
    }
