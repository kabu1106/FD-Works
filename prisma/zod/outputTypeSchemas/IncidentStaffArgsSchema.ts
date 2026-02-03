import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffSelectSchema } from '../inputTypeSchemas/IncidentStaffSelectSchema';
import { IncidentStaffIncludeSchema } from '../inputTypeSchemas/IncidentStaffIncludeSchema';

export const IncidentStaffArgsSchema: z.ZodType<Prisma.IncidentStaffDefaultArgs> = z.object({
  select: z.lazy(() => IncidentStaffSelectSchema).optional(),
  include: z.lazy(() => IncidentStaffIncludeSchema).optional(),
}).strict();

export default IncidentStaffArgsSchema;
