import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalCountOutputTypeSelectSchema } from './HospitalCountOutputTypeSelectSchema';

export const HospitalCountOutputTypeArgsSchema: z.ZodType<Prisma.HospitalCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HospitalCountOutputTypeSelectSchema).nullish(),
}).strict();

export default HospitalCountOutputTypeSelectSchema;
