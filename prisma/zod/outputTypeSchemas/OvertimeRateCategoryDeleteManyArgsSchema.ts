import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryWhereInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryWhereInputSchema'

export const OvertimeRateCategoryDeleteManyArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryDeleteManyArgs> = z.object({
  where: OvertimeRateCategoryWhereInputSchema.optional(), 
}).strict();

export default OvertimeRateCategoryDeleteManyArgsSchema;
