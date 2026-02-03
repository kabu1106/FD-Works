import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { EnumTeamWorkOverrideReasonFilterSchema } from './EnumTeamWorkOverrideReasonFilterSchema';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TeamWorkOverrideScalarWhereInputSchema: z.ZodType<Prisma.TeamWorkOverrideScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWorkOverrideScalarWhereInputSchema), z.lazy(() => TeamWorkOverrideScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWorkOverrideScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWorkOverrideScalarWhereInputSchema), z.lazy(() => TeamWorkOverrideScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  teamWorkDayId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overriddenType: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  reason: z.union([ z.lazy(() => EnumTeamWorkOverrideReasonFilterSchema), z.lazy(() => TeamWorkOverrideReasonSchema) ]).optional(),
  memo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default TeamWorkOverrideScalarWhereInputSchema;
