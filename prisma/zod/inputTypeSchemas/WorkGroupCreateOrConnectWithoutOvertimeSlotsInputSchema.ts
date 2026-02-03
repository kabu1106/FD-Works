import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupWhereUniqueInputSchema } from './WorkGroupWhereUniqueInputSchema';
import { WorkGroupCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema';

export const WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupCreateOrConnectWithoutOvertimeSlotsInput> = z.strictObject({
  where: z.lazy(() => WorkGroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema) ]),
});

export default WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema;
