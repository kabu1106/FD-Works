import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffScalarWhereInputSchema } from './WeeklyDayOffScalarWhereInputSchema';
import { WeeklyDayOffUpdateManyMutationInputSchema } from './WeeklyDayOffUpdateManyMutationInputSchema';
import { WeeklyDayOffUncheckedUpdateManyWithoutStaffInputSchema } from './WeeklyDayOffUncheckedUpdateManyWithoutStaffInputSchema';

export const WeeklyDayOffUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WeeklyDayOffScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WeeklyDayOffUpdateManyMutationInputSchema), z.lazy(() => WeeklyDayOffUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default WeeklyDayOffUpdateManyWithWhereWithoutStaffInputSchema;
