import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { StaffUncheckedCreateNestedManyWithoutTeamInputSchema } from './StaffUncheckedCreateNestedManyWithoutTeamInputSchema';
import { TeamWorkDayUncheckedCreateNestedManyWithoutTeamInputSchema } from './TeamWorkDayUncheckedCreateNestedManyWithoutTeamInputSchema';
import { DutyUncheckedCreateNestedManyWithoutTeamInputSchema } from './DutyUncheckedCreateNestedManyWithoutTeamInputSchema';

export const TeamUncheckedCreateWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutWorkShiftInput> = z.strictObject({
  id: z.number().int().optional(),
  departmentId: z.number().int(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  staffs: z.lazy(() => StaffUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamUncheckedCreateWithoutWorkShiftInputSchema;
