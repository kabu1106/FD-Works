import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalSelectSchema } from '../inputTypeSchemas/HospitalSelectSchema';
import { HospitalIncludeSchema } from '../inputTypeSchemas/HospitalIncludeSchema';

export const HospitalArgsSchema: z.ZodType<Prisma.HospitalDefaultArgs> = z.object({
  select: z.lazy(() => HospitalSelectSchema).optional(),
  include: z.lazy(() => HospitalIncludeSchema).optional(),
}).strict();

export default HospitalArgsSchema;
