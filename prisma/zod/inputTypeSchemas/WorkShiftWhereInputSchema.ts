import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumShiftTypeFilterSchema } from './EnumShiftTypeFilterSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { TeamListRelationFilterSchema } from './TeamListRelationFilterSchema';
import { WorkShiftDayListRelationFilterSchema } from './WorkShiftDayListRelationFilterSchema';

export const WorkShiftWhereInputSchema: z.ZodType<Prisma.WorkShiftWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkShiftWhereInputSchema), z.lazy(() => WorkShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftWhereInputSchema), z.lazy(() => WorkShiftWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shiftType: z.union([ z.lazy(() => EnumShiftTypeFilterSchema), z.lazy(() => ShiftTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayListRelationFilterSchema).optional(),
});

export default WorkShiftWhereInputSchema;
