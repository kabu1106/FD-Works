export function removeStaff(
    staffIds: number[],
    staffId: number
  ): number[] {
    return staffIds.filter(id => id !== staffId)
  }
  
  export function addStaff(
    staffIds: number[],
    staffId: number
  ): number[] {
    return staffIds.includes(staffId)
      ? staffIds
      : [...staffIds, staffId]
  }
  