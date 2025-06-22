from fastapi import APIRouter

router = APIRouter()

@router.get("/api/resume")
def get_resume():
    return {
        "experiences": [
            {"role": "Software Developer Intern", "summary": "Contributed to ML model integration for enhanced cybersecurity."},
            {"role": "Pharmacy Technician", "summary": "Ensured HIPAA-compliant data handling and prescription accuracy."},
            {"role": "Technical Support", "summary": "Provided bilingual IT troubleshooting and technical support."}
        ],
        "link": "/resume.pdf"
    }
