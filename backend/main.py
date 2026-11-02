from fastapi import FastAPI, HTTPException, status
from typing import List, Dict
from datetime import datetime, timedelta
import uuid

from models import Vehicle, Driver, Shipment, ShipmentStatus

app = FastAPI(
    title="RevoFlux Fleet & Logistics Dispatch API",
    description="Full-stack fleet tracking, driver dispatch, and shipment lifecycle management.",
    version="1.0.0"
)

vehicles_db: Dict[str, Vehicle] = {}
shipments_db: Dict[str, Shipment] = {}

@app.on_event("startup")
def seed_data():
    v1 = Vehicle(
        id="V-101",
        license_plate="TX-8892",
        vin="1HGCR2F83HA001928",
        capacity_kg=12500.0,
        current_latitude=32.7767,
        current_longitude=-96.7970,
        status="IN_TRANSIT"
    )
    vehicles_db[v1.id] = v1

    s1 = Shipment(
        tracking_number="RF-TRK-9812",
        shipper_name="Apex Global Distribution",
        consignee_name="Dallas Central Retailers",
        origin_address="Houston Intermodal Terminal, TX",
        destination_address="Dallas Logistics Park, TX",
        assigned_driver_id="DRV-04",
        status=ShipmentStatus.IN_TRANSIT,
        weight_kg=8400.0,
        eta=datetime.utcnow() + timedelta(hours=4)
    )
    shipments_db[s1.tracking_number] = s1

@app.get("/api/v1/fleet/vehicles", response_model=List[Vehicle])
def get_fleet_telematics():
    """Returns real-time vehicle GPS coordinates and operational states."""
    return list(vehicles_db.values())

@app.get("/api/v1/shipments", response_model=List[Shipment])
def list_shipments():
    """Lists all active and delivered shipments with driver assignments."""
    return list(shipments_db.values())

@app.patch("/api/v1/shipments/{tracking_number}/status")
def update_shipment_status(tracking_number: str, status: ShipmentStatus, pod_url: str = None):
    """Updates shipment milestone or records electronic Proof of Delivery."""
    if tracking_number not in shipments_db:
        raise HTTPException(status_code=404, detail="Shipment tracking number not found")
    shipment = shipments_db[tracking_number]
    shipment.status = status
    if pod_url:
        shipment.proof_of_delivery_url = pod_url
    return {"success": True, "shipment": shipment}
