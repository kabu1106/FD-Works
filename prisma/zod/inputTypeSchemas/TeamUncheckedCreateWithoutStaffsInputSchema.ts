import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { TeamWorkDayUncheckedCreateNestedManyWithoutTeamInputSchema } from './TeamWorkDayUncheckedCreateNestedManyWithoutTeamInputSchema';
import { DutyUncheckedCreateNestedManyWithoutTeamInputSchema } from './DutyUncheckedCreateNestedManyWithoutTeamInputSchema';

export const TeamUncheckedCreateWithoutStaffsInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutStaffsInput> = z.strictObject({
  id: z.number().int().optional(),
  departmentId: z.number().int(),
  workShiftId: z.number().int(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamUncheckedCreateWithoutStaffsInputSchema;
