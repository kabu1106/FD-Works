import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const TeamWorkDayCreateManyInputSchema: z.ZodType<Prisma.TeamWorkDayCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  teamId: z.number().int(),
});

export default TeamWorkDayCreateManyInputSchema;
