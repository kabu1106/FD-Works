import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { StaffUncheckedCreateNestedManyWithoutTeamInputSchema } from './StaffUncheckedCreateNestedManyWithoutTeamInputSchema';
import { DutyUncheckedCreateNestedManyWithoutTeamInputSchema } from './DutyUncheckedCreateNestedManyWithoutTeamInputSchema';

export const TeamUncheckedCreateWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeamWorkDayInput> = z.strictObject({
  id: z.number().int().optional(),
  departmentId: z.number().int(),
  workShiftId: z.number().int(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  staffs: z.lazy(() => StaffUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  duties: z.lazy(() => DutyUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
});

export default TeamUncheckedCreateWithoutTeamWorkDayInputSchema;
