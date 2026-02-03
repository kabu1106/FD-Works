import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema';
import { WorkGroupUpsertWithoutOvertimeSlotsInputSchema } from './WorkGroupUpsertWithoutOvertimeSlotsInputSchema';
import { WorkGroupWhereUniqueInputSchema } from './WorkGroupWhereUniqueInputSchema';
import { WorkGroupUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema } from './WorkGroupUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema';
import { WorkGroupUpdateWithoutOvertimeSlotsInputSchema } from './WorkGroupUpdateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema';

export const WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema: z.ZodType<Prisma.WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkGroupCreateOrConnectWithoutOvertimeSlotsInputSchema).optional(),
  upsert: z.lazy(() => WorkGroupUpsertWithoutOvertimeSlotsInputSchema).optional(),
  connect: z.lazy(() => WorkGroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkGroupUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUpdateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema) ]).optional(),
});

export default WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema;
