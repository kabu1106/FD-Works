import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeScalarWhereInputSchema } from './DutyDayTypeScalarWhereInputSchema';
import { DutyDayTypeUpdateManyMutationInputSchema } from './DutyDayTypeUpdateManyMutationInputSchema';
import { DutyDayTypeUncheckedUpdateManyWithoutStaffInputSchema } from './DutyDayTypeUncheckedUpdateManyWithoutStaffInputSchema';

export const DutyDayTypeUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DutyDayTypeUpdateManyMutationInputSchema), z.lazy(() => DutyDayTypeUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default DutyDayTypeUpdateManyWithWhereWithoutStaffInputSchema;
