from fastapi import APIRouter

router = APIRouter()

@router.get("/api/whoami")
def get_whoami():
    return {
        "name": "Ariana Rodriguez-Rosales",
        "title": "Fullstack Developer | Security+ Certified",
        "blurb": "Hi there! I'm Ariana, a recent Computer Science graduate. I've spent time learning about IT and secure systems through projects in full stack development, data analysis, and cybersecurity. I like building things that are new to me, especially when they involve AI or challenge me to apply mathematical thinking. Right now, I'm looking for a team where I can grow, contribute, and keep learning through meaningful, practical experience."
    }
