import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkGroupCreateManyInputSchema: z.ZodType<Prisma.WorkGroupCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
});

export default WorkGroupCreateManyInputSchema;
