from fastapi import APIRouter

router = APIRouter()

@router.get("/api/skills")
def get_skills():
    return {
        "languages": ["Python", "Java", "JavaScript", "SQL"],
        "tools": ["FastAPI", "React", "Firebase", "PostgreSQL", "Wireshark", "Burp Suite", "VMware"],
        "platforms": ["AWS", "Linux (Ubuntu/Kali)", "Windows"],
        "certifications": ["CompTIA Security+"]
    }