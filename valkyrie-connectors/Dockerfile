FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn httpx sqlalchemy psycopg2-binary
EXPOSE 8003
CMD ["python", "src/main.py"]
