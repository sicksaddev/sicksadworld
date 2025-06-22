from fastapi import APIRouter

router = APIRouter()

@router.get("/api/projects")
def get_projects():
    return [
        {
            "title": "HackSA Website",
            "link": "https://hack-sa.vercel.app",
            "desc": "Event site built with React and Firebase."
        },
        {
            "title": "Jorge AI (Hackathon)",
            "link": "https://devpost.com/software/jorge-ai",
            "desc": "AI-powered hackathon tool using Google Cloud and Arduino."
        },
        {
            "title": "GIS Dashboard",
            "link": "https://experience.arcgis.com/experience/d26b817eeb144ed68f8a7a95d2d8eb1a",
            "desc": "Geospatial dashboard built with Python and PostgreSQL."
        }
    ]
