import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffWhereInputSchema } from '../inputTypeSchemas/IncidentStaffWhereInputSchema'

export const IncidentStaffDeleteManyArgsSchema: z.ZodType<Prisma.IncidentStaffDeleteManyArgs> = z.object({
  where: IncidentStaffWhereInputSchema.optional(), 
}).strict();

export default IncidentStaffDeleteManyArgsSchema;
