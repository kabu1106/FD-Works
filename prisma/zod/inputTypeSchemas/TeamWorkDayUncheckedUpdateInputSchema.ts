import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { EnumWorkTypeFieldUpdateOperationsInputSchema } from './EnumWorkTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayNestedInputSchema } from './TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayNestedInputSchema';

export const TeamWorkDayUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamWorkDayUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => WorkTypeSchema), z.lazy(() => EnumWorkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  teamId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  overrides: z.lazy(() => TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayNestedInputSchema).optional(),
});

export default TeamWorkDayUncheckedUpdateInputSchema;
