import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffCountOutputTypeSelectSchema } from './IncidentStaffCountOutputTypeSelectSchema';

export const IncidentStaffCountOutputTypeArgsSchema: z.ZodType<Prisma.IncidentStaffCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentStaffCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IncidentStaffCountOutputTypeSelectSchema;
