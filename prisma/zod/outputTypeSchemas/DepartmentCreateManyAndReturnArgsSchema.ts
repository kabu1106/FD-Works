import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentCreateManyInputSchema } from '../inputTypeSchemas/DepartmentCreateManyInputSchema'

export const DepartmentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DepartmentCreateManyAndReturnArgs> = z.object({
  data: z.union([ DepartmentCreateManyInputSchema, DepartmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DepartmentCreateManyAndReturnArgsSchema;
