import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceSelectSchema } from '../inputTypeSchemas/IncidentStaffAllowanceSelectSchema';
import { IncidentStaffAllowanceIncludeSchema } from '../inputTypeSchemas/IncidentStaffAllowanceIncludeSchema';

export const IncidentStaffAllowanceArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceDefaultArgs> = z.object({
  select: z.lazy(() => IncidentStaffAllowanceSelectSchema).optional(),
  include: z.lazy(() => IncidentStaffAllowanceIncludeSchema).optional(),
}).strict();

export default IncidentStaffAllowanceArgsSchema;
