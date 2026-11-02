# RevoFlux Full-Stack Fleet & Freight Dispatch CRM

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostGIS-16-336791?style=flat-square&logo=postgresql)](https://postgis.net/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

An enterprise-grade, full-stack fleet telematics, dispatch orchestration, and shipment tracking CRM engineered by [RevoFlux](https://revoflux.app) for trucking companies, 3PL freight brokers, last-mile couriers, and intermodal logistics operators.

---

## ⚡ Key Highlights

- **Live GPS Telematics**: Real-time vehicle speed, engine status, and geospatial coordinates via PostGIS.
- **Dynamic Dispatch Board**: Drag-and-drop driver assignment with automatic route optimization and HOS (Hours of Service) compliance checks.
- **Electronic Proof of Delivery (e-POD)**: Mobile-optimized signature capture and bill of lading (BOL) image uploads.
- **Automated Milestone Webhooks**: Instant client notification when shipments reach checkpoints (Departed, Docked, Delayed, Delivered).

---

## 🏗️ Full-Stack Layout

```text
revoflux-fleet-logistics-crm/
├── backend/
│   ├── main.py            # FastAPI REST & WebSocket server
│   ├── models.py          # Pydantic schemas & SQLAlchemy models
│   └── requirements.txt
├── frontend/
│   └── src/
│       └── FleetDashboard.tsx # Command center dispatch board
├── docker-compose.yml     # PostGIS & Backend service orchestration
└── README.md
```

---

## 🚀 Quick Start

### 1. Launch Multi-Service Containers
```bash
docker-compose up -d
```
- **Backend API & Swagger Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **Database:** PostgreSQL/PostGIS on `localhost:5433`

---

## 📄 License
Released under the [MIT License](LICENSE). Engineered and maintained by [RevoFlux](https://revoflux.app).

**Inquiries & Freight Integrations:** [revoflux.ai@gmail.com](mailto:revoflux.ai@gmail.com) | [Founder LinkedIn](https://www.linkedin.com/in/muhammad-dawood-dev)
