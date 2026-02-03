import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalWhereInputSchema } from './HospitalWhereInputSchema';

export const HospitalNullableRelationFilterSchema: z.ZodType<Prisma.HospitalNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => HospitalWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => HospitalWhereInputSchema).optional().nullable(),
});

export default HospitalNullableRelationFilterSchema;
