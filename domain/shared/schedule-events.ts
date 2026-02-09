// types/events/schedule-events.ts

export type ScheduleEvent =
  | StaffAssignedEvent
  | StaffRemovedEvent
  | StaffMovedEvent
  | StaffSwappedEvent
  | SpecialLeaveRegisteredEvent

  export interface StaffAssignedEvent {
    type: 'STAFF_ASSIGNED'
  
    date: string
    staffId: number
    to: {
      teamId: number
      workGroupId: number
    }
  }

  export interface StaffRemovedEvent {
    type: 'STAFF_REMOVED'
  
    date: string
    staffId: number
  
    from: {
      teamId: number
      workGroupId: number
    }
  }

  export interface StaffMovedEvent {
    type: 'STAFF_MOVED'
  
    date: string
    staffId: number
  
    from: {
      teamId: number
      workGroupId: number
    }
    to: {
      teamId: number
      workGroupId: number
    }
  }

  export interface StaffSwappedEvent {
    type: 'STAFF_SWAPPED'
  
    date: string
  
    staffA: {
      staffId: number
      from: {
        teamId: number
        workGroupId: number
      }
      to: {
        teamId: number
        workGroupId: number
      }
    }
  
    staffB: {
      staffId: number
      from: {
        teamId: number
        workGroupId: number
      }
      to: {
        teamId: number
        workGroupId: number
      }
    }
  }
  
  export interface SpecialLeaveRegisteredEvent {
    type: 'SPECIAL_LEAVE_REGISTERED';
    date: string;
    staffId: number;
    leaveTypeId: string;
    timeRange?: string; // 例: "10:00-11:00"
  }