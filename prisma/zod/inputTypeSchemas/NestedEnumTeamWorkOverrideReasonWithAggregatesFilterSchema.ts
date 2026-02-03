import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTeamWorkOverrideReasonFilterSchema } from './NestedEnumTeamWorkOverrideReasonFilterSchema';

export const NestedEnumTeamWorkOverrideReasonWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTeamWorkOverrideReasonWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TeamWorkOverrideReasonSchema).optional(),
  in: z.lazy(() => TeamWorkOverrideReasonSchema).array().optional(),
  notIn: z.lazy(() => TeamWorkOverrideReasonSchema).array().optional(),
  not: z.union([ z.lazy(() => TeamWorkOverrideReasonSchema), z.lazy(() => NestedEnumTeamWorkOverrideReasonWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTeamWorkOverrideReasonFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTeamWorkOverrideReasonFilterSchema).optional(),
});

export default NestedEnumTeamWorkOverrideReasonWithAggregatesFilterSchema;
