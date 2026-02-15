import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedUpdateManyMutationInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedUpdateManyMutationInputSchema'
import { OvertimeSlotResolvedUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedUncheckedUpdateManyInputSchema'
import { OvertimeSlotResolvedWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereInputSchema'

export const OvertimeSlotResolvedUpdateManyArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedUpdateManyArgs> = z.object({
  data: z.union([ OvertimeSlotResolvedUpdateManyMutationInputSchema, OvertimeSlotResolvedUncheckedUpdateManyInputSchema ]),
  where: OvertimeSlotResolvedWhereInputSchema.optional(), 
}).strict();

export default OvertimeSlotResolvedUpdateManyArgsSchema;
