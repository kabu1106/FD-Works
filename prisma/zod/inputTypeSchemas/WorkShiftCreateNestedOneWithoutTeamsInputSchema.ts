import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftCreateWithoutTeamsInputSchema } from './WorkShiftCreateWithoutTeamsInputSchema';
import { WorkShiftUncheckedCreateWithoutTeamsInputSchema } from './WorkShiftUncheckedCreateWithoutTeamsInputSchema';
import { WorkShiftCreateOrConnectWithoutTeamsInputSchema } from './WorkShiftCreateOrConnectWithoutTeamsInputSchema';
import { WorkShiftWhereUniqueInputSchema } from './WorkShiftWhereUniqueInputSchema';

export const WorkShiftCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftCreateNestedOneWithoutTeamsInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkShiftCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => WorkShiftWhereUniqueInputSchema).optional(),
});

export default WorkShiftCreateNestedOneWithoutTeamsInputSchema;
