import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const OvertimeSlotScalarWhereInputSchema: z.ZodType<Prisma.OvertimeSlotScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSlotScalarWhereInputSchema), z.lazy(() => OvertimeSlotScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotScalarWhereInputSchema), z.lazy(() => OvertimeSlotScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  startMinute: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  endMinute: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
});

export default OvertimeSlotScalarWhereInputSchema;
