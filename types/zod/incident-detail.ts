import { z } from 'zod'

export const IncidentDetailUISchema = z.object({
  id: z.string(),

  category: z.object({
    id: z.number(),
    name: z.string(),
    color: z.string(),
  }),

  type: z.object({
    id: z.number(),
    name: z.string(),
  }),

  occurredAt: z.string(),

  location: z.object({
    id: z.number(),
    fullName: z.string(),
  }),

  destination: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .optional(),

  vehicles: z.array(
    z.object({
      id: z.string(),
      vehicle: z.object({
        id: z.number(),
        name: z.string(),
      }),
      dispatchTime: z.string(),
      returnTime: z.string().optional(),

      staffs: z.array(
        z.object({
          id: z.string(),
          staff: z.object({
            id: z.number(),
            staffNo: z.string(),
            name: z.string(),
          }),
          allowances: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              color: z.string().optional(),
            })
          ),
        })
      ),
    })
  ),

  memo: z.string().optional(),
})
