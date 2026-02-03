import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayDateTeamIdCompoundUniqueInputSchema } from './TeamWorkDayDateTeamIdCompoundUniqueInputSchema';
import { TeamWorkDayWhereInputSchema } from './TeamWorkDayWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TeamRelationFilterSchema } from './TeamRelationFilterSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamWorkOverrideListRelationFilterSchema } from './TeamWorkOverrideListRelationFilterSchema';

export const TeamWorkDayWhereUniqueInputSchema: z.ZodType<Prisma.TeamWorkDayWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    date_teamId: z.lazy(() => TeamWorkDayDateTeamIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    date_teamId: z.lazy(() => TeamWorkDayDateTeamIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  date_teamId: z.lazy(() => TeamWorkDayDateTeamIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TeamWorkDayWhereInputSchema), z.lazy(() => TeamWorkDayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWorkDayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWorkDayWhereInputSchema), z.lazy(() => TeamWorkDayWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  team: z.union([ z.lazy(() => TeamRelationFilterSchema), z.lazy(() => TeamWhereInputSchema) ]).optional(),
  overrides: z.lazy(() => TeamWorkOverrideListRelationFilterSchema).optional(),
}));

export default TeamWorkDayWhereUniqueInputSchema;
