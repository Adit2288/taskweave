# TaskWeave

An AI-assisted freelance marketplace for hiring people, planning projects,
and handling changes during delivery.

Built by Adit Ishmam, a CSE student at United International University.

## Project status

Under development through a four-week guided learning journey.

### Working now

- Django backend setup.
- Health endpoint at `/api/health/`.
- Project model with title, description, budget, deadline, and creation time.
- Project management through Django admin.
- Secret key loaded from a private `.env` file.

### Planned features

- React frontend with a WhatsTask-inspired dark theme.
- Client and freelancer accounts.
- Google and Facebook login.
- Freelancer profiles, proposals, and hiring.
- AI-generated task drafts and freelancer recommendations.
- Budget-aware scheduling and recovery planning.
- Task tracking and team messages.

## Technologies

Current: Python, Django, SQLite, and python-dotenv.

Planned: React, TypeScript, Django REST Framework, PostgreSQL,
django-allauth, Gemini API, and OR-Tools.

## Local setup on Windows

Run these commands in PowerShell from the project root:

```powershell
python -m venv backend/.venv
.\backend\.venv\Scripts\python.exe -m pip install -r backend/requirements.txt
Copy-Item backend/.env.example backend/.env
```

Generate your own Django secret key:

```powershell
.\backend\.venv\Scripts\python.exe -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copy the generated value into `backend/.env`:

```dotenv
DJANGO_SECRET_KEY=your-generated-key
```

Initialize the database and create your own local admin account:

```powershell
.\backend\.venv\Scripts\python.exe backend/manage.py migrate
.\backend\.venv\Scripts\python.exe backend/manage.py createsuperuser
```

Start the development server:

```powershell
.\backend\.venv\Scripts\python.exe backend/manage.py runserver
```

Keep that terminal running while using the application.

- Health endpoint: http://127.0.0.1:8000/api/health/
- Admin dashboard: http://127.0.0.1:8000/admin/

## Configuration

`.env.example` documents the required settings.

Your actual `.env`, local database, and virtual environment are excluded
from Git. Each developer creates their own configuration and admin account.

## License

MIT License. See LICENSE.