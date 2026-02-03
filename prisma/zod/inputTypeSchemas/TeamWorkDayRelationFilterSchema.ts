import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereInputSchema } from './TeamWorkDayWhereInputSchema';

export const TeamWorkDayRelationFilterSchema: z.ZodType<Prisma.TeamWorkDayRelationFilter> = z.strictObject({
  is: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
  isNot: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
});

export default TeamWorkDayRelationFilterSchema;
