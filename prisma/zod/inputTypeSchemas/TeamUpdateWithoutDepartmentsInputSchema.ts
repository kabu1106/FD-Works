import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { EnumShiftTypeFieldUpdateOperationsInputSchema } from './EnumShiftTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StaffUpdateManyWithoutTeamNestedInputSchema } from './StaffUpdateManyWithoutTeamNestedInputSchema';
import { WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema } from './WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema';
import { TeamWorkDayUpdateManyWithoutTeamNestedInputSchema } from './TeamWorkDayUpdateManyWithoutTeamNestedInputSchema';
import { DutyUpdateManyWithoutTeamNestedInputSchema } from './DutyUpdateManyWithoutTeamNestedInputSchema';

export const TeamUpdateWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamUpdateWithoutDepartmentsInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shiftType: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => EnumShiftTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  staffs: z.lazy(() => StaffUpdateManyWithoutTeamNestedInputSchema).optional(),
  workShift: z.lazy(() => WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayUpdateManyWithoutTeamNestedInputSchema).optional(),
  duties: z.lazy(() => DutyUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export default TeamUpdateWithoutDepartmentsInputSchema;
