import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/DutyDayTypeUpdateManyMutationInputSchema'
import { DutyDayTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DutyDayTypeUncheckedUpdateManyInputSchema'
import { DutyDayTypeWhereInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereInputSchema'

export const DutyDayTypeUpdateManyArgsSchema: z.ZodType<Prisma.DutyDayTypeUpdateManyArgs> = z.object({
  data: z.union([ DutyDayTypeUpdateManyMutationInputSchema, DutyDayTypeUncheckedUpdateManyInputSchema ]),
  where: DutyDayTypeWhereInputSchema.optional(), 
}).strict();

export default DutyDayTypeUpdateManyArgsSchema;
