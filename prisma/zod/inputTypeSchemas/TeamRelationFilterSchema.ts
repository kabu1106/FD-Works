import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';

export const TeamRelationFilterSchema: z.ZodType<Prisma.TeamRelationFilter> = z.strictObject({
  is: z.lazy(() => TeamWhereInputSchema).optional(),
  isNot: z.lazy(() => TeamWhereInputSchema).optional(),
});

export default TeamRelationFilterSchema;
