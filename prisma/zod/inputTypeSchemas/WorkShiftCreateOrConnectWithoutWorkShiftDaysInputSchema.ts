import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftWhereUniqueInputSchema } from './WorkShiftWhereUniqueInputSchema';
import { WorkShiftCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema';

export const WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema: z.ZodType<Prisma.WorkShiftCreateOrConnectWithoutWorkShiftDaysInput> = z.strictObject({
  where: z.lazy(() => WorkShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema) ]),
});

export default WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema;
