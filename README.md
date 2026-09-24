# Phnes Travels
<img width="948" height="327" alt="image" src="https://github.com/user-attachments/assets/bfeac663-0cca-4eec-8b19-1338758926f1" />
<img width="947" height="326" alt="image" src="https://github.com/user-attachments/assets/01c267b5-fd41-4760-8860-385e3955719f" />
<img width="935" height="394" alt="image" src="https://github.com/user-attachments/assets/44454c48-0129-4fda-a6b8-de200fd15cd1" />
<img width="947" height="373" alt="image" src="https://github.com/user-attachments/assets/2e1112ef-c78c-4bc8-a35c-efdc12257117" />
<img width="947" height="322" alt="image" src="https://github.com/user-attachments/assets/f5bc8ce5-f750-4025-b79c-78602edfdf20" />
<img width="936" height="347" alt="image" src="https://github.com/user-attachments/assets/3908ce17-dbd5-4063-8705-ce8c549acd82" />

<img width="959" height="320" alt="image" src="https://github.com/user-attachments/assets/37fcaf1b-b52b-43b1-b039-9b04a6e2423a" />


A full-stack travel booking platform where customers browse and book flights and hotel stays, and administrators manage inventory, bookings, and customer accounts through a dedicated dashboard.

**Live app:** https://travalagency-eight.vercel.app
**Admin dashboard:** available on request
**API:** https://travelagency-backend-r.onrender.com

---

## Overview

Phnes Travels is built as three cooperating applications sharing a single backend and database:

- **Customer-facing app** — browse flight and hotel listings, book a trip, and view booking history from a personal account.
- **Admin dashboard** — full CRUD management of flight/hotel listings, bookings, team members, contact messages, and user accounts, with role-based access control.
- **Backend API** — Express/MongoDB service handling authentication, bookings, and content, exposing separate public and admin-only endpoints.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend (both apps) | React, Vite, React Router |
| Admin UI components | Material UI (MUI) |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Authentication | JWT (access + refresh tokens), httpOnly cookies |
| Image hosting | Cloudinary |
| Deployment | Vercel (frontends), Render (backend) |

---

## Key features

**Customer app**
- Browse available flights and hotels, populated dynamically from the database
- Book a flight or hotel stay with real-time price and availability
- View personal booking history ("My Bookings"), split by flights and hotels
- Account registration and login with persistent sessions

**Admin dashboard**
- Full CRUD for flight and hotel listings (create, edit, delete, toggle availability)
- View all customer bookings with linked listing details (destination, price, image)
- Manage user accounts, including promoting/demoting admin access
- Manage team member profiles shown on the public site
- View and moderate contact form submissions
- Dashboard overview with live statistics across all resources
- Light/dark theme support

**Backend**
- Role-based access control (public / authenticated customer / admin)
- Secure password hashing and JWT-based authentication with automatic token refresh
- Server-derived pricing on every booking (never trusted from client input)
- Separate public and admin-only endpoints for shared resources

---

## Project structure

```
Travel-Agency-web-app/       # Customer-facing frontend
ADMIN-dashBoard-travels/      # Admin dashboard frontend
Travel-Agency-backend-r/      # Shared Express + MongoDB backend
```

Each frontend is deployed independently and communicates with the same backend API over HTTPS.

---

## Running locally

Each of the three projects has its own `.env` file (not committed) with the following variables:

**Backend**
```
MONGO_URI=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
CLIENT_URL=
ADMIN_CLIENT_URL=
NODE_ENV=development
PORT=5000
```

**Frontends**
```
VITE_API_ROOT_URL=http://localhost:5000
VITE_API_BASE_URL=http://localhost:5000/api/admin   # admin dashboard only
```

**Install and run each project:**
```bash
npm install
npm run dev
```

---

## Author

Tliba Rayhane — Computer Science student, École Normale Supérieure de Kouba (ENSK)
