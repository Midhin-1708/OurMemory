# OUR STORY — Cinematic Personal Relationship Website & Surprise Gift

A deeply emotional, cinematic, and interactive digital memory book and documentary built for your wife / girlfriend's birthday and private 1-month marriage anniversary.

---

## ✨ Features & Chapters Included

1. **Cinematic Opening**: Dark screen, film grain, ambient dust motes, sequenced text pacing, headphone suggestion, "ENTER OUR STORY →" trigger.
2. **Before I Knew You**: Converging life paths (IT/Bangalore & Medicine/Abroad) coming together through a mutual friend and a hospital.
3. **The Day I Met You**: First hospital memory, photo reveal, first conversation and message.
4. **When We Started Talking**: Animated WhatsApp/iMessage chat dialogue that seamlessly transitions into falling in love.
5. **Our Love Story Timeline**: 14 vertical cinematic milestones (first meeting to 1 month marriage), each with interactive modal inspection.
6. **The Parts That Weren't Perfect**: Slower, darker, honest typography honoring the fights, silence, and tears.
7. **We Rebuilt**: Animated Kintsugi golden heart shards repairing together, honest conversations manifesto.
8. **Long Distance**: Animated connecting flight arc between Bangalore and her country abroad, distance stats, time zone badges.
9. **Her Dream of Becoming a Doctor**: Dedicated tribute to her medical studies, stethoscope pulse line, unwavering pride.
10. **The Days We Didn't Have to Miss Each Other**: 10 comprehensive sub-chapters:
    - *Home* (quiet mornings beside each other)
    - *Airbnb / Hotel* (travel journal polaroids)
    - *Bangalore* (city exploration & cafes)
    - *Flying Together* (airplane animation, sitting side by side)
    - *Cooking* (ordinary messy kitchen joy)
    - *Temple* (quiet sanctuary prayers)
    - *Hugs* (slow zoom embrace)
    - *Kisses* (tasteful, tender silhouette)
    - *Laughing* (rapid joyful montage)
    - *Crying* (emotional tears turned to holy memories)
11. **Memory Collage**: Orbiting tags converging into the central master photograph "US".
12. **Our Secret**: Mystery unlock revealing your private **1-Month Marriage Anniversary**!
13. **Memory Gallery**: Filterable photo archive with Polaroids, film strips, and private notes.
14. **Things I Don't Say Enough**: 6 glowing vulnerability cards.
15. **The Letter**: Sealed wax envelope that unfolds into a handwritten parchment letter with sacred personal promises and birthday wishes.
16. **Now It's Your Turn**: Private 8-question relationship questionnaire ("Tell me how to love you better").
17. **Save Her Answers**: FastAPI + SQLite REST API (`POST /api/answers`) with real-time feedback & offline safety backup.
18. **Private Admin Vault**: Protected dashboard at `http://localhost:5173#admin` (Default PIN: `love2026`) displaying all her responses chronologically.
19. **Final Scene**: Champagne gold confetti celebration, best memory photo, and *"OUR STORY CONTINUES..."*

---

## 🚀 How to Run

### Option 1: One-Command Launcher
From the root folder:
```powershell
python run_all.py
```
This automatically launches:
- **FastAPI Backend**: `http://127.0.0.1:8000`
- **React Frontend**: `http://localhost:5173`

### Option 2: Running Independently
**Backend**:
```powershell
cd backend
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

**Frontend**:
```powershell
cd frontend
npm run dev
```

---

## 🎨 How to Personalize for Her

### 1. Edit Names, Dates, & Placeholders
Open `frontend/src/data/storyConfig.js`:
- Replace `[HER NAME]`, `[MY NAME]`
- Replace `[FIRST MEETING DATE]`, `[OUR MARRIAGE DATE]`, `[HER BIRTHDAY]`
- Replace `[HER COUNTRY]`, `[OUR FIRST TRIP DATE]`
- Customize the love letter paragraphs and promises to match your heart!

### 2. Add Your Real Photos and Videos
- Put your media files in `frontend/public/memories/`
- Open `frontend/src/data/memories.js` and set the `src` attribute (e.g., `src: "/memories/first-meeting.jpg"`). Supports `.jpg`, `.png`, `.webp`, `.mp4`.

### 3. Add Custom Music Tracks
- Put your favorite songs in `frontend/public/audio/`:
  - `opening.mp3`
  - `love.mp3`
  - `emotional.mp3`
  - `letter.mp3`
  - `final.mp3`
*(Note: Even before you drop in MP3s, a custom Web Audio ambient synth automatically plays a peaceful, cinematic pad soundtrack so there is never silence!)*

---

## 🔐 How to Read Her Answers

1. Click the secret lock icon in the top-right header or footer.
2. Or open: `http://localhost:5173#admin`
3. Enter your PIN: `love2026`
4. All her submitted thoughts and answers will be displayed with timestamps and question titles.
