import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { DepartmentCreateNestedOneWithoutTeamsInputSchema } from './DepartmentCreateNestedOneWithoutTeamsInputSchema';
import { StaffCreateNestedManyWithoutTeamInputSchema } from './StaffCreateNestedManyWithoutTeamInputSchema';
import { WorkShiftCreateNestedOneWithoutTeamsInputSchema } from './WorkShiftCreateNestedOneWithoutTeamsInputSchema';
import { TeamWorkDayCreateNestedManyWithoutTeamInputSchema } from './TeamWorkDayCreateNestedManyWithoutTeamInputSchema';
import { DutyCreateNestedManyWithoutTeamInputSchema } from './DutyCreateNestedManyWithoutTeamInputSchema';

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  departments: z.lazy(() => DepartmentCreateNestedOneWithoutTeamsInputSchema),
  staffs: z.lazy(() => StaffCreateNestedManyWithoutTeamInputSchema).optional(),
  workShift: z.lazy(() => WorkShiftCreateNestedOneWithoutTeamsInputSchema),
  teamWorkDay: z.lazy(() => TeamWorkDayCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamCreateInputSchema;
