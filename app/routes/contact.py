from fastapi import APIRouter

router = APIRouter()

@router.get("/api/contact")
def get_contact():
    return {
        "linkedin": "https://linkedin.com/in/arianardrgz"
    }
