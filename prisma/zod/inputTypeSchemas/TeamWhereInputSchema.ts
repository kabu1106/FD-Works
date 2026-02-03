import type { Prisma } from '@prisma/client';

import { z } from 'zod';
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

export const TeamWhereInputSchema: z.ZodType<Prisma.TeamWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shiftType: z.union([ z.lazy(() => EnumShiftTypeFilterSchema), z.lazy(() => ShiftTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  departments: z.union([ z.lazy(() => DepartmentRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  staffs: z.lazy(() => StaffListRelationFilterSchema).optional(),
  workShift: z.union([ z.lazy(() => WorkShiftRelationFilterSchema), z.lazy(() => WorkShiftWhereInputSchema) ]).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayListRelationFilterSchema).optional(),
  duties: z.lazy(() => DutyListRelationFilterSchema).optional(),
});

export default TeamWhereInputSchema;
