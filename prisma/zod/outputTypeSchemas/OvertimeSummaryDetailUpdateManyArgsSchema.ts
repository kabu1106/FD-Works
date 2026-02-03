import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailUpdateManyMutationInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailUpdateManyMutationInputSchema'
import { OvertimeSummaryDetailUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailUncheckedUpdateManyInputSchema'
import { OvertimeSummaryDetailWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereInputSchema'

export const OvertimeSummaryDetailUpdateManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateManyArgs> = z.object({
  data: z.union([ OvertimeSummaryDetailUpdateManyMutationInputSchema, OvertimeSummaryDetailUncheckedUpdateManyInputSchema ]),
  where: OvertimeSummaryDetailWhereInputSchema.optional(), 
}).strict();

export default OvertimeSummaryDetailUpdateManyArgsSchema;
