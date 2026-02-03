import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumShiftTypeFilterSchema } from './EnumShiftTypeFilterSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DepartmentRelationFilterSchema } from './DepartmentRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { StaffListRelationFilterSchema } from './StaffListRelationFilterSchema';
import { WorkShiftRelationFilterSchema } from './WorkShiftRelationFilterSchema';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';
import { TeamWorkDayListRelationFilterSchema } from './TeamWorkDayListRelationFilterSchema';
import { DutyListRelationFilterSchema } from './DutyListRelationFilterSchema';

export const TeamWhereUniqueInputSchema: z.ZodType<Prisma.TeamWhereUniqueInput> = z.union([
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
  AND: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shiftType: z.union([ z.lazy(() => EnumShiftTypeFilterSchema), z.lazy(() => ShiftTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  departments: z.union([ z.lazy(() => DepartmentRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  staffs: z.lazy(() => StaffListRelationFilterSchema).optional(),
  workShift: z.union([ z.lazy(() => WorkShiftRelationFilterSchema), z.lazy(() => WorkShiftWhereInputSchema) ]).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayListRelationFilterSchema).optional(),
  duties: z.lazy(() => DutyListRelationFilterSchema).optional(),
}));

export default TeamWhereUniqueInputSchema;
