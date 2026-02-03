import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema';
import { WorkGroupWhereUniqueInputSchema } from './WorkGroupWhereUniqueInputSchema';

export const WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupCreateNestedOneWithoutOvertimeSlotsInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema).optional(),
  connect: z.lazy(() => WorkGroupWhereUniqueInputSchema).optional(),
});

export default WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema;
