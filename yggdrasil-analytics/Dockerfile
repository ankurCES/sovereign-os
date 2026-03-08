FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn
EXPOSE 8005
CMD ["python", "src/main.py"]
