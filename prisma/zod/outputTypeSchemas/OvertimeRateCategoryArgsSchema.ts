import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategorySelectSchema } from '../inputTypeSchemas/OvertimeRateCategorySelectSchema';
import { OvertimeRateCategoryIncludeSchema } from '../inputTypeSchemas/OvertimeRateCategoryIncludeSchema';

export const OvertimeRateCategoryArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryDefaultArgs> = z.object({
  select: z.lazy(() => OvertimeRateCategorySelectSchema).optional(),
  include: z.lazy(() => OvertimeRateCategoryIncludeSchema).optional(),
}).strict();

export default OvertimeRateCategoryArgsSchema;
