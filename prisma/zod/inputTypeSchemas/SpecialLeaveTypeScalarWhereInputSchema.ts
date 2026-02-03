import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const SpecialLeaveTypeScalarWhereInputSchema: z.ZodType<Prisma.SpecialLeaveTypeScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema), z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema), z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  specialLeaveGroupId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default SpecialLeaveTypeScalarWhereInputSchema;
