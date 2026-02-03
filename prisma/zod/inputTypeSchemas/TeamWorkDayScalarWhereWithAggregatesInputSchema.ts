import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumWorkTypeWithAggregatesFilterSchema } from './EnumWorkTypeWithAggregatesFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const TeamWorkDayScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamWorkDayScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWorkDayScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamWorkDayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWorkDayScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWorkDayScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamWorkDayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeWithAggregatesFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  teamId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export default TeamWorkDayScalarWhereWithAggregatesInputSchema;
