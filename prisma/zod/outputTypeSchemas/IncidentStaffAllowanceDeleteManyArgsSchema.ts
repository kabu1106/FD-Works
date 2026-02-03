import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceWhereInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereInputSchema'

export const IncidentStaffAllowanceDeleteManyArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceDeleteManyArgs> = z.object({
  where: IncidentStaffAllowanceWhereInputSchema.optional(), 
}).strict();

export default IncidentStaffAllowanceDeleteManyArgsSchema;
