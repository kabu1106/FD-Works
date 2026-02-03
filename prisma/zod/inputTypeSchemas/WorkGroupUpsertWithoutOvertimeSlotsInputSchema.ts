import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupUpdateWithoutOvertimeSlotsInputSchema } from './WorkGroupUpdateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema';
import { WorkGroupCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';

export const WorkGroupUpsertWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupUpsertWithoutOvertimeSlotsInput> = z.strictObject({
  update: z.union([ z.lazy(() => WorkGroupUpdateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema) ]),
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema) ]),
  where: z.lazy(() => WorkGroupWhereInputSchema).optional(),
});

export default WorkGroupUpsertWithoutOvertimeSlotsInputSchema;
