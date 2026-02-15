import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeSelectSchema } from '../inputTypeSchemas/DutyDayTypeSelectSchema';
import { DutyDayTypeIncludeSchema } from '../inputTypeSchemas/DutyDayTypeIncludeSchema';

export const DutyDayTypeArgsSchema: z.ZodType<Prisma.DutyDayTypeDefaultArgs> = z.object({
  select: z.lazy(() => DutyDayTypeSelectSchema).optional(),
  include: z.lazy(() => DutyDayTypeIncludeSchema).optional(),
}).strict();

export default DutyDayTypeArgsSchema;
