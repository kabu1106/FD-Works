import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const StaffScalarWhereInputSchema: z.ZodType<Prisma.StaffScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StaffScalarWhereInputSchema), z.lazy(() => StaffScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StaffScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StaffScalarWhereInputSchema), z.lazy(() => StaffScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  staffNo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  photoKey: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default StaffScalarWhereInputSchema;
