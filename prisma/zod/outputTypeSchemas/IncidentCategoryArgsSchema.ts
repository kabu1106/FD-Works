import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategorySelectSchema } from '../inputTypeSchemas/IncidentCategorySelectSchema';
import { IncidentCategoryIncludeSchema } from '../inputTypeSchemas/IncidentCategoryIncludeSchema';

export const IncidentCategoryArgsSchema: z.ZodType<Prisma.IncidentCategoryDefaultArgs> = z.object({
  select: z.lazy(() => IncidentCategorySelectSchema).optional(),
  include: z.lazy(() => IncidentCategoryIncludeSchema).optional(),
}).strict();

export default IncidentCategoryArgsSchema;
