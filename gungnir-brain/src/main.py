from fastapi import FastAPI
from pydantic import BaseModel
from src.agents.SovereignAgent import SovereignAgent

app = FastAPI(title="Gungnir Sovereign API")
agent = SovereignAgent()

class ChatRequest(BaseModel):
    user_id: str
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    response = await agent.process_chat(request.user_id, request.message)
    return {"status": "success", "response": response}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
