import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyRelationFilterSchema: z.ZodType<Prisma.DutyRelationFilter> = z.strictObject({
  is: z.lazy(() => DutyWhereInputSchema).optional(),
  isNot: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyRelationFilterSchema;
