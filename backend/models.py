from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, DateTime
from database import Base


class RelationshipAnswer(Base):
    __tablename__ = "relationship_answers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    answer_1 = Column(Text, nullable=True)
    answer_2 = Column(Text, nullable=True)
    answer_3 = Column(Text, nullable=True)
    answer_4 = Column(Text, nullable=True)
    answer_5 = Column(Text, nullable=True)
    answer_6 = Column(Text, nullable=True)
    answer_7 = Column(Text, nullable=True)
    answer_8 = Column(Text, nullable=True)
