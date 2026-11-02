from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from enum import Enum

class ShipmentStatus(str, Enum):
    PENDING_DISPATCH = "PENDING_DISPATCH"
    IN_TRANSIT = "IN_TRANSIT"
    OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY"
    DELIVERED = "DELIVERED"
    EXCEPTION = "EXCEPTION"

class Vehicle(BaseModel):
    id: str
    license_plate: str
    vin: str
    capacity_kg: float
    current_latitude: float
    current_longitude: float
    status: str = "ACTIVE"

class Driver(BaseModel):
    id: str
    name: str
    phone: str
    license_number: str
    assigned_vehicle_id: Optional[str] = None
    is_on_duty: bool = True

class Shipment(BaseModel):
    tracking_number: str
    shipper_name: str
    consignee_name: str
    origin_address: str
    destination_address: str
    assigned_driver_id: Optional[str] = None
    status: ShipmentStatus = ShipmentStatus.PENDING_DISPATCH
    weight_kg: float
    eta: datetime
    proof_of_delivery_url: Optional[str] = None
