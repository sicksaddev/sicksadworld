from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.routes import whoami, skills, projects, resume, contact

app = FastAPI()

app.include_router(whoami.router)
app.include_router(skills.router)
app.include_router(projects.router)
app.include_router(resume.router)
app.include_router(contact.router)

app.mount("/", StaticFiles(directory="static", html=True), name="static")
