import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftUpdateWithoutWorkShiftDaysInputSchema } from './WorkShiftUpdateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema';
import { WorkShiftCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';

export const WorkShiftUpsertWithoutWorkShiftDaysInputSchema: z.ZodType<Prisma.WorkShiftUpsertWithoutWorkShiftDaysInput> = z.strictObject({
  update: z.union([ z.lazy(() => WorkShiftUpdateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema) ]),
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema) ]),
  where: z.lazy(() => WorkShiftWhereInputSchema).optional(),
});

export default WorkShiftUpsertWithoutWorkShiftDaysInputSchema;
