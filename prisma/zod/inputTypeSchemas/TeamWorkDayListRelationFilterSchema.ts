import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereInputSchema } from './TeamWorkDayWhereInputSchema';

export const TeamWorkDayListRelationFilterSchema: z.ZodType<Prisma.TeamWorkDayListRelationFilter> = z.strictObject({
  every: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
  some: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
  none: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
});

export default TeamWorkDayListRelationFilterSchema;
