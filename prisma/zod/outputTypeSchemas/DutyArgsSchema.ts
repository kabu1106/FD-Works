import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutySelectSchema } from '../inputTypeSchemas/DutySelectSchema';
import { DutyIncludeSchema } from '../inputTypeSchemas/DutyIncludeSchema';

export const DutyArgsSchema: z.ZodType<Prisma.DutyDefaultArgs> = z.object({
  select: z.lazy(() => DutySelectSchema).optional(),
  include: z.lazy(() => DutyIncludeSchema).optional(),
}).strict();

export default DutyArgsSchema;
