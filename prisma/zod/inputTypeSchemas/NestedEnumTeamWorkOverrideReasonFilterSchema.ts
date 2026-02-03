import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';

export const NestedEnumTeamWorkOverrideReasonFilterSchema: z.ZodType<Prisma.NestedEnumTeamWorkOverrideReasonFilter> = z.strictObject({
  equals: z.lazy(() => TeamWorkOverrideReasonSchema).optional(),
  in: z.lazy(() => TeamWorkOverrideReasonSchema).array().optional(),
  notIn: z.lazy(() => TeamWorkOverrideReasonSchema).array().optional(),
  not: z.union([ z.lazy(() => TeamWorkOverrideReasonSchema), z.lazy(() => NestedEnumTeamWorkOverrideReasonFilterSchema) ]).optional(),
});

export default NestedEnumTeamWorkOverrideReasonFilterSchema;
