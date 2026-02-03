import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const TeamWorkDayScalarWhereInputSchema: z.ZodType<Prisma.TeamWorkDayScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWorkDayScalarWhereInputSchema), z.lazy(() => TeamWorkDayScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWorkDayScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWorkDayScalarWhereInputSchema), z.lazy(() => TeamWorkDayScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default TeamWorkDayScalarWhereInputSchema;
