import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftWhereUniqueInputSchema } from './WorkShiftWhereUniqueInputSchema';
import { WorkShiftCreateWithoutTeamsInputSchema } from './WorkShiftCreateWithoutTeamsInputSchema';
import { WorkShiftUncheckedCreateWithoutTeamsInputSchema } from './WorkShiftUncheckedCreateWithoutTeamsInputSchema';

export const WorkShiftCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftCreateOrConnectWithoutTeamsInput> = z.strictObject({
  where: z.lazy(() => WorkShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutTeamsInputSchema) ]),
});

export default WorkShiftCreateOrConnectWithoutTeamsInputSchema;
