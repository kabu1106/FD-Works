import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { EnumShiftTypeFieldUpdateOperationsInputSchema } from './EnumShiftTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StaffUncheckedUpdateManyWithoutTeamNestedInputSchema } from './StaffUncheckedUpdateManyWithoutTeamNestedInputSchema';
import { TeamWorkDayUncheckedUpdateManyWithoutTeamNestedInputSchema } from './TeamWorkDayUncheckedUpdateManyWithoutTeamNestedInputSchema';
import { DutyUncheckedUpdateManyWithoutTeamNestedInputSchema } from './DutyUncheckedUpdateManyWithoutTeamNestedInputSchema';

export const TeamUncheckedUpdateWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutWorkShiftInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  departmentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shiftType: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => EnumShiftTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  staffs: z.lazy(() => StaffUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  duties: z.lazy(() => DutyUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export default TeamUncheckedUpdateWithoutWorkShiftInputSchema;
