import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumShiftTypeFilterSchema } from './EnumShiftTypeFilterSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const TeamScalarWhereInputSchema: z.ZodType<Prisma.TeamScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shiftType: z.union([ z.lazy(() => EnumShiftTypeFilterSchema), z.lazy(() => ShiftTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default TeamScalarWhereInputSchema;
