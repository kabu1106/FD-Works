import { EventBase } from "../shared/base"

export type IncidentEvent =
  | IncidentOccurred
  | VehicleDispatched
  | StaffBoarded
  | VehicleReturned
  | IncidentClosed

export type IncidentOccurred = EventBase<
  "IncidentOccurred",
  {
    incidentId: string
    dutyId: string
    occurredAt: string
    locationId: number
  }
>

export type VehicleDispatched = EventBase<
  "VehicleDispatched",
  {
    incidentId: string
    vehicleId: number
    dispatchedAt: string
  }
>

export type StaffBoarded = EventBase<
  "StaffBoarded",
  {
    incidentId: string
    vehicleId: number
    staffId: number
    boardedAt: string
  }
>

export type VehicleReturned = EventBase<
  "VehicleReturned",
  {
    incidentId: string
    vehicleId: number
    returnedAt: string
  }
>

export type IncidentClosed = EventBase<
  "IncidentClosed",
  {
    incidentId: string
    closedAt: string
  }
>
