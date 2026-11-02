# RevoFlux AutoCare & Fleet Logistics ERP

[![Python](https://img.shields.io/badge/Python-3.11%2B-blue?style=flat-square&logo=python)](https://python.org)
[![Django](https://img.shields.io/badge/Django-5.x-092E20?style=flat-square&logo=django)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

An enterprise automotive garage management, vehicle servicing, and commercial fleet logistics ERP engineered by [RevoFlux](https://revoflux.app). Built for multi-bay automotive repair workshops, commercial fleet operators, authorized service centers, and independent mechanics.

---

## ⚡ Core Operational Portals

- **Customer Self-Service Portal**: Book service appointments, view real-time vehicle repair milestones, and download itemized invoices.
- **Mechanic & Technician Workstation**: Digital job cards, parts requisition forms, inspection checklists, and hourly labor tracking.
- **Service Center Admin Command**: Bay scheduling, mechanic payroll & commission calculation, inventory stock alerts, and customer billing.
- **Commercial Fleet Telematics**: GPS tracking, vehicle maintenance scheduling, and fuel consumption ledgers.

---

## 🏗️ Architecture & Modules

```text
revoflux-fleet-logistics-crm/
├── vehicle/                 # Vehicle service models, job card workflows & forms
├── vehicleservicemanagement/# Core application settings, auth & routing
├── backend/                 # FastAPI real-time telematics microservice
├── frontend/                # React fleet dispatch dashboard
├── templates/               # Django dynamic templates (Customer, Mechanic, Admin)
├── static/                  # Stylesheets, vendor scripts, and UI assets
├── docker-compose.yml       # PostgreSQL & multi-service deployment
├── manage.py
├── requirements.txt
└── README.md
```

---

## 🚀 Quick Start

### 1. Setup Virtual Environment
```bash
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Run Database Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Launch Application Server
```bash
python manage.py runserver 8000
```
Open [http://localhost:8000](http://localhost:8000) to access the RevoFlux AutoCare & Fleet portal.

---

## 📄 License
Released under the [MIT License](LICENSE). Maintained by [RevoFlux](https://revoflux.app).

**Automotive & Fleet Software Customization:** [revoflux.ai@gmail.com](mailto:revoflux.ai@gmail.com) | [Founder LinkedIn](https://www.linkedin.com/in/muhammad-dawood-dev)
