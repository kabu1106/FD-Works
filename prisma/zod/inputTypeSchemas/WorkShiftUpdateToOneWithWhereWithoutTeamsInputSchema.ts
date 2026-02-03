import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';
import { WorkShiftUpdateWithoutTeamsInputSchema } from './WorkShiftUpdateWithoutTeamsInputSchema';
import { WorkShiftUncheckedUpdateWithoutTeamsInputSchema } from './WorkShiftUncheckedUpdateWithoutTeamsInputSchema';

export const WorkShiftUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftUpdateToOneWithWhereWithoutTeamsInput> = z.strictObject({
  where: z.lazy(() => WorkShiftWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkShiftUpdateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedUpdateWithoutTeamsInputSchema) ]),
});

export default WorkShiftUpdateToOneWithWhereWithoutTeamsInputSchema;
