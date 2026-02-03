import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const HospitalCountOutputTypeSelectSchema: z.ZodType<Prisma.HospitalCountOutputTypeSelect> = z.object({
  destination: z.boolean().optional(),
}).strict();

export default HospitalCountOutputTypeSelectSchema;
