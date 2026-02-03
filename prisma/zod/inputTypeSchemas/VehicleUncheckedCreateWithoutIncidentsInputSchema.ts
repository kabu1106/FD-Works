import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VehicleUncheckedCreateWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutIncidentsInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  departmentId: z.number().int().optional().nullable(),
  isActive: z.boolean().optional(),
});

export default VehicleUncheckedCreateWithoutIncidentsInputSchema;
