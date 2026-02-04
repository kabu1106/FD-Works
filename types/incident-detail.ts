// =====================
// Incident 詳細（画面ルート）
// =====================

export interface IncidentDetailUI {
    id: string
  
    category: {
      id: number
      name: string
      color: string
    }
  
    type: {
      id: number
      name: string
    }
  
    occurredAt: string
  
    location: {
      id: number
      fullName: string
    }
  
    destination?: {
      id: number
      name: string
    }
  
    vehicles: IncidentDetailVehicleUI[]
  
    memo?: string
  }
  
  // =====================
  // 車両
  // =====================
  
  export interface IncidentDetailVehicleUI {
    id: string
  
    vehicle: {
      id: number
      name: string
    }
  
    dispatchTime: string
    returnTime?: string
  
    staffs: IncidentDetailStaffUI[]
  }
  
  // =====================
  // 出動職員
  // =====================
  
  export interface IncidentDetailStaffUI {
    id: string
  
    staff: {
      id: number
      staffNo: string
      name: string
    }
  
    allowances: IncidentAllowanceUI[]
  }
  
  // =====================
  // 手当
  // =====================
  
  export interface IncidentAllowanceUI {
    id: number
    name: string
    color?: string
  }
  