import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayScalarWhereInputSchema } from './WorkShiftDayScalarWhereInputSchema';
import { WorkShiftDayUpdateManyMutationInputSchema } from './WorkShiftDayUpdateManyMutationInputSchema';
import { WorkShiftDayUncheckedUpdateManyWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedUpdateManyWithoutWorkShiftInputSchema';

export const WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInputSchema: z.ZodType<Prisma.WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => WorkShiftDayScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkShiftDayUpdateManyMutationInputSchema), z.lazy(() => WorkShiftDayUncheckedUpdateManyWithoutWorkShiftInputSchema) ]),
});

export default WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInputSchema;
