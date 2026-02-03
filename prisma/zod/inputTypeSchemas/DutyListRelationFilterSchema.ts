import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyListRelationFilterSchema: z.ZodType<Prisma.DutyListRelationFilter> = z.strictObject({
  every: z.lazy(() => DutyWhereInputSchema).optional(),
  some: z.lazy(() => DutyWhereInputSchema).optional(),
  none: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyListRelationFilterSchema;
