import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeamWorkDayOrderByWithRelationInputSchema } from './TeamWorkDayOrderByWithRelationInputSchema';

export const TeamWorkOverrideOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamWorkOverrideOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  teamWorkDayId: z.lazy(() => SortOrderSchema).optional(),
  overriddenType: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayOrderByWithRelationInputSchema).optional(),
});

export default TeamWorkOverrideOrderByWithRelationInputSchema;
