import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceUpdateManyMutationInputSchema } from '../inputTypeSchemas/AttendanceUpdateManyMutationInputSchema'
import { AttendanceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AttendanceUncheckedUpdateManyInputSchema'
import { AttendanceWhereInputSchema } from '../inputTypeSchemas/AttendanceWhereInputSchema'

export const AttendanceUpdateManyArgsSchema: z.ZodType<Prisma.AttendanceUpdateManyArgs> = z.object({
  data: z.union([ AttendanceUpdateManyMutationInputSchema, AttendanceUncheckedUpdateManyInputSchema ]),
  where: AttendanceWhereInputSchema.optional(), 
}).strict();

export default AttendanceUpdateManyArgsSchema;
