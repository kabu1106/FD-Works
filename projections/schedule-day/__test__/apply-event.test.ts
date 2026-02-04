import { applyScheduleEvent } from '../apply-events'
import { baseProjection } from './fixtures'

describe('STAFF_ASSIGNED', () => {
  it('指定された workGroup に staff を追加する', () => {
    const result = applyScheduleEvent(baseProjection, {
      type: 'STAFF_ASSIGNED',
      date: '2026-02-01',
      staffId: 10,
      to: { teamId: 1,workGroupId: 101 }
    })

    expect(result.teams[0].workGroups[0].staffIds).toEqual([10])
  })

  it('同じ staff を二重に追加しない', () => {
    const once = applyScheduleEvent(baseProjection, {
      type: 'STAFF_ASSIGNED',
      date: '2026-02-01',
      staffId: 10,
      to: { teamId: 1,workGroupId: 101 }
    })

    const twice = applyScheduleEvent(once, {
      type: 'STAFF_ASSIGNED',
      date: '2026-02-01',
      staffId: 10,
      to: { teamId: 1,workGroupId: 101 }
    })

    expect(twice.teams[0].workGroups[0].staffIds).toEqual([10])
  })
})

describe('STAFF_REMOVED', () => {
    it('指定された workGroup から staff を削除する', () => {
      const initial = {
        ...baseProjection,
        teams: [{
          teamId: 1,
          workGroups: [
            { workGroupId: 101, staffIds: [10, 20] },
            { workGroupId: 102, staffIds: [] },
          ],
        }],
      }
  
      const result = applyScheduleEvent(initial, {
        type: 'STAFF_REMOVED',
        date: '2026-02-01',
        staffId: 10,
        from: { teamId: 1, workGroupId: 101 },
      })
  
      expect(result.teams[0].workGroups[0].staffIds).toEqual([20])
    })
  })

  describe('STAFF_MOVED', () => {
    it('from から削除し to に追加する', () => {
      const initial = {
        ...baseProjection,
        teams: [{
          teamId: 1,
          workGroups: [
            { workGroupId: 101, staffIds: [10] },
            { workGroupId: 102, staffIds: [] },
          ],
        }],
      }
  
      const result = applyScheduleEvent(initial, {
        type: 'STAFF_MOVED',
        date: '2026-02-01',
        staffId: 10,
        from: { teamId: 1, workGroupId: 101 },
        to: { teamId: 1, workGroupId: 102 },
      })
  
      expect(result.teams[0].workGroups[0].staffIds).toEqual([])
      expect(result.teams[0].workGroups[1].staffIds).toEqual([10])
    })
  })

  describe('STAFF_SWAPPED', () => {
    it('2人の staff の配置を入れ替える', () => {
      const initial = {
        ...baseProjection,
        teams: [{
          teamId: 1,
          workGroups: [
            { workGroupId: 101, staffIds: [10] },
            { workGroupId: 102, staffIds: [20] },
          ],
        }],
      }
  
      const result = applyScheduleEvent(initial, {
        type: 'STAFF_SWAPPED',
        date: '2026-02-01',
        staffA: { 
          staffId: 10,         
          from: { teamId: 1, workGroupId: 101 },
          to: { teamId: 1, workGroupId: 102 },
        },
        staffB: { 
          staffId: 20,
          from: { teamId: 1, workGroupId: 102 },
          to: { teamId: 1, workGroupId: 101 },
        },
      })
  
      expect(result.teams[0].workGroups[0].staffIds).toEqual([20])
      expect(result.teams[0].workGroups[1].staffIds).toEqual([10])
    })
  })
  
  