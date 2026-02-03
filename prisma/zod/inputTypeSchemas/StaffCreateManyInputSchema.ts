import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffCreateManyInputSchema: z.ZodType<Prisma.StaffCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  teamId: z.number().int(),
});

export default StaffCreateManyInputSchema;
