import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VehicleCreateManyDepartmentInputSchema: z.ZodType<Prisma.VehicleCreateManyDepartmentInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
});

export default VehicleCreateManyDepartmentInputSchema;
