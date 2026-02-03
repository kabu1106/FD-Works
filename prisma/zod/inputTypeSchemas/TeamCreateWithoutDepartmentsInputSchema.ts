import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { StaffCreateNestedManyWithoutTeamInputSchema } from './StaffCreateNestedManyWithoutTeamInputSchema';
import { WorkShiftCreateNestedOneWithoutTeamsInputSchema } from './WorkShiftCreateNestedOneWithoutTeamsInputSchema';
import { TeamWorkDayCreateNestedManyWithoutTeamInputSchema } from './TeamWorkDayCreateNestedManyWithoutTeamInputSchema';
import { DutyCreateNestedManyWithoutTeamInputSchema } from './DutyCreateNestedManyWithoutTeamInputSchema';

export const TeamCreateWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamCreateWithoutDepartmentsInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  staffs: z.lazy(() => StaffCreateNestedManyWithoutTeamInputSchema).optional(),
  workShift: z.lazy(() => WorkShiftCreateNestedOneWithoutTeamsInputSchema),
  teamWorkDay: z.lazy(() => TeamWorkDayCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamCreateWithoutDepartmentsInputSchema;
