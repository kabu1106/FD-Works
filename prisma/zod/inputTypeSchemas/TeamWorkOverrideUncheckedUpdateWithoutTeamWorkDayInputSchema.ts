import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { EnumWorkTypeFieldUpdateOperationsInputSchema } from './EnumWorkTypeFieldUpdateOperationsInputSchema';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';
import { EnumTeamWorkOverrideReasonFieldUpdateOperationsInputSchema } from './EnumTeamWorkOverrideReasonFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  overriddenType: z.union([ z.lazy(() => WorkTypeSchema), z.lazy(() => EnumWorkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.lazy(() => TeamWorkOverrideReasonSchema), z.lazy(() => EnumTeamWorkOverrideReasonFieldUpdateOperationsInputSchema) ]).optional(),
  memo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export default TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema;
