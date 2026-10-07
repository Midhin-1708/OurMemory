import os
from typing import List, Optional
from fastapi import FastAPI, Depends, HTTPException, Header, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, get_db, Base
from models import RelationshipAnswer
from schemas import AnswerCreate, AnswerResponse

# Initialize database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Our Memories API",
    description="Backend API for personal cinematic relationship memories & answers",
    version="1.0.0"
)

# Enable CORS for React frontend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all for local preview and private deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ADMIN_PIN = os.getenv("ADMIN_PIN", "love2026")


@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "our-memories-backend"}


@app.post("/api/answers", response_model=AnswerResponse, status_code=status.HTTP_201_CREATED)
def submit_answers(payload: AnswerCreate, db: Session = Depends(get_db)):
    """
    Save her answers to the database with UTC timestamp
    """
    answer_record = RelationshipAnswer(
        answer_1=payload.answer_1,
        answer_2=payload.answer_2,
        answer_3=payload.answer_3,
        answer_4=payload.answer_4,
        answer_5=payload.answer_5,
        answer_6=payload.answer_6,
        answer_7=payload.answer_7,
        answer_8=payload.answer_8,
    )
    db.add(answer_record)
    db.commit()
    db.refresh(answer_record)
    return answer_record


@app.get("/api/answers", response_model=List[AnswerResponse])
def get_all_answers(
    pin: Optional[str] = None,
    x_admin_pin: Optional[str] = Header(None),
    db: Session = Depends(get_db)
):
    """
    Retrieve all submitted answers for the private admin review.
    Protected with a simple secret PIN so answers remain private.
    """
    provided_pin = x_admin_pin or pin
    if provided_pin != ADMIN_PIN:
        # Also allow viewing if no pin is configured or test mode
        # but let's check against ADMIN_PIN for safety
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect Admin PIN. Her answers are private."
        )

    answers = db.query(RelationshipAnswer).order_by(RelationshipAnswer.created_at.desc()).all()
    return answers


@app.delete("/api/answers/{answer_id}", status_code=status.HTTP_200_OK)
def delete_answer(
    answer_id: int,
    pin: Optional[str] = None,
    x_admin_pin: Optional[str] = Header(None),
    db: Session = Depends(get_db)
):
    provided_pin = x_admin_pin or pin
    if provided_pin != ADMIN_PIN:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect Admin PIN"
        )
    record = db.query(RelationshipAnswer).filter(RelationshipAnswer.id == answer_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Answer not found")
    db.delete(record)
    db.commit()
    return {"message": "Answer deleted successfully"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
