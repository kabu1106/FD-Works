import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereInputSchema } from './OvertimeSlotWhereInputSchema';

export const OvertimeSlotListRelationFilterSchema: z.ZodType<Prisma.OvertimeSlotListRelationFilter> = z.strictObject({
  every: z.lazy(() => OvertimeSlotWhereInputSchema).optional(),
  some: z.lazy(() => OvertimeSlotWhereInputSchema).optional(),
  none: z.lazy(() => OvertimeSlotWhereInputSchema).optional(),
});

export default OvertimeSlotListRelationFilterSchema;
