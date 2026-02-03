import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumShiftTypeFilterSchema } from './EnumShiftTypeFilterSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { TeamListRelationFilterSchema } from './TeamListRelationFilterSchema';
import { WorkShiftDayListRelationFilterSchema } from './WorkShiftDayListRelationFilterSchema';

export const WorkShiftWhereUniqueInputSchema: z.ZodType<Prisma.WorkShiftWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => WorkShiftWhereInputSchema), z.lazy(() => WorkShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftWhereInputSchema), z.lazy(() => WorkShiftWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shiftType: z.union([ z.lazy(() => EnumShiftTypeFilterSchema), z.lazy(() => ShiftTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayListRelationFilterSchema).optional(),
}));

export default WorkShiftWhereUniqueInputSchema;
