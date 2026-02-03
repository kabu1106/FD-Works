import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { DepartmentCreateNestedOneWithoutTeamsInputSchema } from './DepartmentCreateNestedOneWithoutTeamsInputSchema';
import { WorkShiftCreateNestedOneWithoutTeamsInputSchema } from './WorkShiftCreateNestedOneWithoutTeamsInputSchema';
import { TeamWorkDayCreateNestedManyWithoutTeamInputSchema } from './TeamWorkDayCreateNestedManyWithoutTeamInputSchema';
import { DutyCreateNestedManyWithoutTeamInputSchema } from './DutyCreateNestedManyWithoutTeamInputSchema';

export const TeamCreateWithoutStaffsInputSchema: z.ZodType<Prisma.TeamCreateWithoutStaffsInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  departments: z.lazy(() => DepartmentCreateNestedOneWithoutTeamsInputSchema),
  workShift: z.lazy(() => WorkShiftCreateNestedOneWithoutTeamsInputSchema),
  teamWorkDay: z.lazy(() => TeamWorkDayCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamCreateWithoutStaffsInputSchema;
