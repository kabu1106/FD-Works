import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';
import { WorkGroupUpdateWithoutOvertimeSlotsInputSchema } from './WorkGroupUpdateWithoutOvertimeSlotsInputSchema';
import { WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema } from './WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema';

export const WorkGroupUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupUpdateToOneWithWhereWithoutOvertimeSlotsInput> = z.strictObject({
  where: z.lazy(() => WorkGroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkGroupUpdateWithoutOvertimeSlotsInputSchema), z.lazy(() => WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema) ]),
});

export default WorkGroupUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema;
