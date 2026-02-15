import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeScalarWhereInputSchema } from './DutyDayTypeScalarWhereInputSchema';
import { DutyDayTypeUpdateManyMutationInputSchema } from './DutyDayTypeUpdateManyMutationInputSchema';
import { DutyDayTypeUncheckedUpdateManyWithoutDutyInputSchema } from './DutyDayTypeUncheckedUpdateManyWithoutDutyInputSchema';

export const DutyDayTypeUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.DutyDayTypeUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DutyDayTypeUpdateManyMutationInputSchema), z.lazy(() => DutyDayTypeUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default DutyDayTypeUpdateManyWithWhereWithoutDutyInputSchema;
