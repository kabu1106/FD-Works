import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftUpdateWithoutTeamsInputSchema } from './WorkShiftUpdateWithoutTeamsInputSchema';
import { WorkShiftUncheckedUpdateWithoutTeamsInputSchema } from './WorkShiftUncheckedUpdateWithoutTeamsInputSchema';
import { WorkShiftCreateWithoutTeamsInputSchema } from './WorkShiftCreateWithoutTeamsInputSchema';
import { WorkShiftUncheckedCreateWithoutTeamsInputSchema } from './WorkShiftUncheckedCreateWithoutTeamsInputSchema';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';

export const WorkShiftUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftUpsertWithoutTeamsInput> = z.strictObject({
  update: z.union([ z.lazy(() => WorkShiftUpdateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => WorkShiftWhereInputSchema).optional(),
});

export default WorkShiftUpsertWithoutTeamsInputSchema;
