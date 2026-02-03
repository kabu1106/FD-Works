import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffCreateManyTeamInputSchema: z.ZodType<Prisma.StaffCreateManyTeamInput> = z.strictObject({
  id: z.number().int().optional(),
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
});

export default StaffCreateManyTeamInputSchema;
