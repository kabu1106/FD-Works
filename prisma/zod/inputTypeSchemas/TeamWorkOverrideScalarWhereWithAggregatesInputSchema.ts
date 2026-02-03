import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumWorkTypeWithAggregatesFilterSchema } from './EnumWorkTypeWithAggregatesFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { EnumTeamWorkOverrideReasonWithAggregatesFilterSchema } from './EnumTeamWorkOverrideReasonWithAggregatesFilterSchema';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TeamWorkOverrideScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamWorkOverrideScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWorkOverrideScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamWorkOverrideScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWorkOverrideScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWorkOverrideScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamWorkOverrideScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  teamWorkDayId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  overriddenType: z.union([ z.lazy(() => EnumWorkTypeWithAggregatesFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  reason: z.union([ z.lazy(() => EnumTeamWorkOverrideReasonWithAggregatesFilterSchema), z.lazy(() => TeamWorkOverrideReasonSchema) ]).optional(),
  memo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default TeamWorkOverrideScalarWhereWithAggregatesInputSchema;
