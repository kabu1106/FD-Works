import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubstituteHolidayUpdateManyMutationInputSchema'
import { SubstituteHolidayUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubstituteHolidayUncheckedUpdateManyInputSchema'
import { SubstituteHolidayWhereInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereInputSchema'

export const SubstituteHolidayUpdateManyArgsSchema: z.ZodType<Prisma.SubstituteHolidayUpdateManyArgs> = z.object({
  data: z.union([ SubstituteHolidayUpdateManyMutationInputSchema, SubstituteHolidayUncheckedUpdateManyInputSchema ]),
  where: SubstituteHolidayWhereInputSchema.optional(), 
}).strict();

export default SubstituteHolidayUpdateManyArgsSchema;
