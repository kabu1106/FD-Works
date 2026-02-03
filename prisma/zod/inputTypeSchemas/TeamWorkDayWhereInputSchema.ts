import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TeamRelationFilterSchema } from './TeamRelationFilterSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamWorkOverrideListRelationFilterSchema } from './TeamWorkOverrideListRelationFilterSchema';

export const TeamWorkDayWhereInputSchema: z.ZodType<Prisma.TeamWorkDayWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWorkDayWhereInputSchema), z.lazy(() => TeamWorkDayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWorkDayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWorkDayWhereInputSchema), z.lazy(() => TeamWorkDayWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  team: z.union([ z.lazy(() => TeamRelationFilterSchema), z.lazy(() => TeamWhereInputSchema) ]).optional(),
  overrides: z.lazy(() => TeamWorkOverrideListRelationFilterSchema).optional(),
});

export default TeamWorkDayWhereInputSchema;
