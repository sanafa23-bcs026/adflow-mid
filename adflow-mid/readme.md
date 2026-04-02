# AdFlow Pro – Mid-Term Project ✨

**Team / Roll No:** FA23-BCS-024
**Tech Stack:** Next.js + Tailwind CSS | Node.js + Express | Supabase | Vercel

---

## 1️⃣ Project Overview

AdFlow Pro is a sponsored listing marketplace with:

* Clients submit ads 💻
* Moderators review content 🧐
* Admins verify payments 💰
* Only approved ads are publicly visible ✅

### Key Features:

* Multi-role system: Client, Moderator, Admin, Super Admin
* Package-based visibility & ranking 🏷️
* Media normalization (YouTube / public URLs) 🎥🖼️
* Scheduled publishing & expiry automation ⏰
* Analytics dashboard & notifications 📊

---

## 2️⃣ User Roles & Responsibilities

| Role        | Responsibility                                      |
| ----------- | --------------------------------------------------- |
| Client      | Create ads, submit payment proof, track status      |
| Moderator   | Review content, flag/reject ads, add notes          |
| Admin       | Verify payments, schedule/publish ads, manage users |
| Super Admin | Manage packages, categories, system settings        |

---

## 3️⃣ Ad Lifecycle

**Draft → Submitted → Under Review → Payment Pending → Payment Verified → Scheduled → Published → Expired**

* **Draft:** Client creates ad
* **Submitted:** Validation passed
* **Under Review:** Moderator reviews content
* **Payment Pending / Verified:** Admin approves payment
* **Scheduled / Published:** Published based on schedule
* **Expired:** Ad auto-hidden

---

## 4️⃣ Folder Structure

```
adflow-mid/
├─ client/               # Frontend
│  ├─ src/
│  │   ├─ app/
│  │   ├─ components/
│  │   ├─ features/
│  │   └─ utils/
│  └─ package.json
├─ server/               # Backend
│  ├─ routes/
│  ├─ controllers/
│  ├─ middlewares/
│  ├─ db/
│  └─ index.js
└─ README.md
```

---

## 5️⃣ Quick Commands

### Backend Server

```
cd server
npm install
npm run dev     # Start server at localhost:5000
```

### Frontend

```
cd client
npm install
npm run dev     # Start frontend at localhost:3000
```

---

## 6️⃣ Core Tables

* users, seller_profiles, packages
* ads, ad_media, payments
* categories, cities
* audit_logs, ad_status_history, notifications

---

## 7️⃣ Example APIs

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/ads
POST   /api/client/ads
PATCH  /api/admin/ads/:id
POST   /api/cron/publish-scheduled
```

---

## 8️⃣ Ranking Formula

```
rankScore = (featured ? 50 : 0) + (packageWeight * 10) + freshnessPoints + adminBoost + verifiedSellerPoints
```

---

## 9️⃣ Automation

* Publish scheduled ads hourly ⏱️
* Expire outdated ads daily 🗑️
* Notify users 48h before ad expiry 📩
* DB & system health monitoring 💾

---

## 🔟 Instructor Notes

* Fully supports multi-role workflow & automation
* Ready for deployment on Vercel + Supabase
* Complete CRUD, package rules, ad status lifecycle implemented
* Sample dataset: 15–25 ads

---

