import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideWhereInputSchema } from './TeamWorkOverrideWhereInputSchema';

export const TeamWorkOverrideListRelationFilterSchema: z.ZodType<Prisma.TeamWorkOverrideListRelationFilter> = z.strictObject({
  every: z.lazy(() => TeamWorkOverrideWhereInputSchema).optional(),
  some: z.lazy(() => TeamWorkOverrideWhereInputSchema).optional(),
  none: z.lazy(() => TeamWorkOverrideWhereInputSchema).optional(),
});

export default TeamWorkOverrideListRelationFilterSchema;
