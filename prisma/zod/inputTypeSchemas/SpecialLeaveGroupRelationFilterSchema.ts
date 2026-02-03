import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupWhereInputSchema } from './SpecialLeaveGroupWhereInputSchema';

export const SpecialLeaveGroupRelationFilterSchema: z.ZodType<Prisma.SpecialLeaveGroupRelationFilter> = z.strictObject({
  is: z.lazy(() => SpecialLeaveGroupWhereInputSchema).optional(),
  isNot: z.lazy(() => SpecialLeaveGroupWhereInputSchema).optional(),
});

export default SpecialLeaveGroupRelationFilterSchema;
