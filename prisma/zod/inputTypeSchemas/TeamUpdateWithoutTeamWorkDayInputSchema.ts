import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { EnumShiftTypeFieldUpdateOperationsInputSchema } from './EnumShiftTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneRequiredWithoutTeamsNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutTeamsNestedInputSchema';
import { StaffUpdateManyWithoutTeamNestedInputSchema } from './StaffUpdateManyWithoutTeamNestedInputSchema';
import { WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema } from './WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema';
import { DutyUpdateManyWithoutTeamNestedInputSchema } from './DutyUpdateManyWithoutTeamNestedInputSchema';

export const TeamUpdateWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeamWorkDayInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shiftType: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => EnumShiftTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  departments: z.lazy(() => DepartmentUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  staffs: z.lazy(() => StaffUpdateManyWithoutTeamNestedInputSchema).optional(),
  workShift: z.lazy(() => WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  duties: z.lazy(() => DutyUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export default TeamUpdateWithoutTeamWorkDayInputSchema;
