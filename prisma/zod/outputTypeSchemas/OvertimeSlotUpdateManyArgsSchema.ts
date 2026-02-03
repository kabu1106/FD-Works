import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotUpdateManyMutationInputSchema } from '../inputTypeSchemas/OvertimeSlotUpdateManyMutationInputSchema'
import { OvertimeSlotUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OvertimeSlotUncheckedUpdateManyInputSchema'
import { OvertimeSlotWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereInputSchema'

export const OvertimeSlotUpdateManyArgsSchema: z.ZodType<Prisma.OvertimeSlotUpdateManyArgs> = z.object({
  data: z.union([ OvertimeSlotUpdateManyMutationInputSchema, OvertimeSlotUncheckedUpdateManyInputSchema ]),
  where: OvertimeSlotWhereInputSchema.optional(), 
}).strict();

export default OvertimeSlotUpdateManyArgsSchema;
