from fastapi import FastAPI
from pydantic import BaseModel
from src.agents.SovereignAgent import SovereignAgent

app = FastAPI(title="Gungnir Sovereign API")
agent = SovereignAgent()

class ChatRequest(BaseModel):
    user_id: str
    message: str

@app.post("/api/chat")
async def chat(request: ChatRequest):
    result = await agent.process_chat(request.user_id, request.message)
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
