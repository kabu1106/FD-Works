import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryUpdateManyMutationInputSchema'
import { OvertimeRateCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryUncheckedUpdateManyInputSchema'
import { OvertimeRateCategoryWhereInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryWhereInputSchema'

export const OvertimeRateCategoryUpdateManyArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateManyArgs> = z.object({
  data: z.union([ OvertimeRateCategoryUpdateManyMutationInputSchema, OvertimeRateCategoryUncheckedUpdateManyInputSchema ]),
  where: OvertimeRateCategoryWhereInputSchema.optional(), 
}).strict();

export default OvertimeRateCategoryUpdateManyArgsSchema;
