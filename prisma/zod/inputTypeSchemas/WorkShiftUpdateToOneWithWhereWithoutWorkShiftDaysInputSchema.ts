import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';
import { WorkShiftUpdateWithoutWorkShiftDaysInputSchema } from './WorkShiftUpdateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema';

export const WorkShiftUpdateToOneWithWhereWithoutWorkShiftDaysInputSchema: z.ZodType<Prisma.WorkShiftUpdateToOneWithWhereWithoutWorkShiftDaysInput> = z.strictObject({
  where: z.lazy(() => WorkShiftWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkShiftUpdateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema) ]),
});

export default WorkShiftUpdateToOneWithWhereWithoutWorkShiftDaysInputSchema;
