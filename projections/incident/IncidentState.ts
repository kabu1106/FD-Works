export interface VehicleState {

    vehicleId: number
    dispatchedAt: string
    returnedAt: string | null
    staffIds: number[]
  
  }
  
  export interface IncidentState {
  
    incident: {
      id: string
      dutyId: string
      locationId: number
      occurredAt: string
      status: "OPEN" | "CLOSED"
      closedAt: string | null
    } | null
  
    vehicles: VehicleState[]
  
  }
  
  export function createInitialIncidentState(): IncidentState {
  
    return {
      incident: null,
      vehicles: []
    }
  
  }