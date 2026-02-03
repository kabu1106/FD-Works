import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeamOrderByWithRelationInputSchema } from './TeamOrderByWithRelationInputSchema';
import { TeamWorkOverrideOrderByRelationAggregateInputSchema } from './TeamWorkOverrideOrderByRelationAggregateInputSchema';

export const TeamWorkDayOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamWorkDayOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  overrides: z.lazy(() => TeamWorkOverrideOrderByRelationAggregateInputSchema).optional(),
});

export default TeamWorkDayOrderByWithRelationInputSchema;
