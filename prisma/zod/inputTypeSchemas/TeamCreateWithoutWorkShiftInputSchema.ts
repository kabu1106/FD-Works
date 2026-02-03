import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { DepartmentCreateNestedOneWithoutTeamsInputSchema } from './DepartmentCreateNestedOneWithoutTeamsInputSchema';
import { StaffCreateNestedManyWithoutTeamInputSchema } from './StaffCreateNestedManyWithoutTeamInputSchema';
import { TeamWorkDayCreateNestedManyWithoutTeamInputSchema } from './TeamWorkDayCreateNestedManyWithoutTeamInputSchema';
import { DutyCreateNestedManyWithoutTeamInputSchema } from './DutyCreateNestedManyWithoutTeamInputSchema';

export const TeamCreateWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamCreateWithoutWorkShiftInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  departments: z.lazy(() => DepartmentCreateNestedOneWithoutTeamsInputSchema),
  staffs: z.lazy(() => StaffCreateNestedManyWithoutTeamInputSchema).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamCreateWithoutWorkShiftInputSchema;
