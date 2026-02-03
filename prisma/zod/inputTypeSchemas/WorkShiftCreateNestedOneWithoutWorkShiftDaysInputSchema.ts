import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema';
import { WorkShiftWhereUniqueInputSchema } from './WorkShiftWhereUniqueInputSchema';

export const WorkShiftCreateNestedOneWithoutWorkShiftDaysInputSchema: z.ZodType<Prisma.WorkShiftCreateNestedOneWithoutWorkShiftDaysInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema).optional(),
  connect: z.lazy(() => WorkShiftWhereUniqueInputSchema).optional(),
});

export default WorkShiftCreateNestedOneWithoutWorkShiftDaysInputSchema;
