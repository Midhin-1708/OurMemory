from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class AnswerCreate(BaseModel):
    answer_1: Optional[str] = ""
    answer_2: Optional[str] = ""
    answer_3: Optional[str] = ""
    answer_4: Optional[str] = ""
    answer_5: Optional[str] = ""
    answer_6: Optional[str] = ""
    answer_7: Optional[str] = ""
    answer_8: Optional[str] = ""


class AnswerResponse(BaseModel):
    id: int
    created_at: datetime
    answer_1: Optional[str] = ""
    answer_2: Optional[str] = ""
    answer_3: Optional[str] = ""
    answer_4: Optional[str] = ""
    answer_5: Optional[str] = ""
    answer_6: Optional[str] = ""
    answer_7: Optional[str] = ""
    answer_8: Optional[str] = ""

    class Config:
        from_attributes = True
