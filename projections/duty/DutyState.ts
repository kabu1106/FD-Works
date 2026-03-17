export interface DutyAssignment {

    dutyId: string
    staffId: number
    workGroupId: number
  
  }
  
  export interface DutyState {
  
    duty: {
      id: string
      date: string
      teamId: number
      status: "APPROVED" | "UNAPPROVED"
      isLocked: boolean
      lockedAt: string | null
    } | null
  
    assignments: DutyAssignment[]
  
  }
  
  export function createInitialDutyState(): DutyState {
  
    return {
      duty: null,
      assignments: []
    }
  
  }