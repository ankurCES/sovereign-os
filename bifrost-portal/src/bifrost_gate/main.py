from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
import httpx
import os
import asyncio
import json

app = FastAPI(title="Bifrost-Gate (The Bridge)", version="0.1.0")

# Serve static dashboard files (Okita/Apollo Mandate)
# Using the gungnir-landing-page logic as the base for the LAN Dashboard.
app.mount("/static", StaticFiles(directory="static"), name="static")

GUNGNIR_CORE_URL = os.getenv("GUNGNIR_CORE_URL", "http://gungnir-core:8000")

@app.get("/")
async def root():
    """Serve the Functional Frontend Demo (The Nexus Dashboard)."""
    return FileResponse("static/index.html")

@app.post("/v1/query")
async def proxy_query(request: Request):
    """Proxy queries to the Gungnir-Core Orchestrator."""
    async with httpx.AsyncClient() as client:
        body = await request.json()
        response = await client.post(f"{GUNGNIR_CORE_URL}/query", json=body)
        return response.json()

@app.get("/v1/stream")
async def stream_query(q: str):
    """SSE Streaming endpoint for real-time tokens."""
    async def event_generator():
        # Simulate streaming from Gungnir-Core (Nexus Phase)
        tokens = ["Initializing...", "Accessing Mjolnir-Fabric...", "Analyzing...", "Result:", "The", "Spear", "is", "true."]
        for token in tokens:
            yield f"data: {json.dumps({'token': token})}\n\n"
            await asyncio.sleep(0.5)
    return StreamingResponse(event_generator(), media_type="text/event-stream")

if __name__ == "__main__":
    import uvicorn
    # Served on LAN Port 8001
    uvicorn.run(app, host="0.0.0.0", port=8001)
