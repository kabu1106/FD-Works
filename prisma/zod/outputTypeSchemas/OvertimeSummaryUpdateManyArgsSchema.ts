import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryUpdateManyMutationInputSchema } from '../inputTypeSchemas/OvertimeSummaryUpdateManyMutationInputSchema'
import { OvertimeSummaryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OvertimeSummaryUncheckedUpdateManyInputSchema'
import { OvertimeSummaryWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereInputSchema'

export const OvertimeSummaryUpdateManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryUpdateManyArgs> = z.object({
  data: z.union([ OvertimeSummaryUpdateManyMutationInputSchema, OvertimeSummaryUncheckedUpdateManyInputSchema ]),
  where: OvertimeSummaryWhereInputSchema.optional(), 
}).strict();

export default OvertimeSummaryUpdateManyArgsSchema;
