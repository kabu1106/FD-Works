import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventUpdateManyMutationInputSchema } from '../inputTypeSchemas/AttendanceEventUpdateManyMutationInputSchema'
import { AttendanceEventUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AttendanceEventUncheckedUpdateManyInputSchema'
import { AttendanceEventWhereInputSchema } from '../inputTypeSchemas/AttendanceEventWhereInputSchema'

export const AttendanceEventUpdateManyArgsSchema: z.ZodType<Prisma.AttendanceEventUpdateManyArgs> = z.object({
  data: z.union([ AttendanceEventUpdateManyMutationInputSchema, AttendanceEventUncheckedUpdateManyInputSchema ]),
  where: AttendanceEventWhereInputSchema.optional(), 
}).strict();

export default AttendanceEventUpdateManyArgsSchema;
