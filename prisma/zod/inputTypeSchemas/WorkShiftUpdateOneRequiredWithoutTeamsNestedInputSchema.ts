import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftCreateWithoutTeamsInputSchema } from './WorkShiftCreateWithoutTeamsInputSchema';
import { WorkShiftUncheckedCreateWithoutTeamsInputSchema } from './WorkShiftUncheckedCreateWithoutTeamsInputSchema';
import { WorkShiftCreateOrConnectWithoutTeamsInputSchema } from './WorkShiftCreateOrConnectWithoutTeamsInputSchema';
import { WorkShiftUpsertWithoutTeamsInputSchema } from './WorkShiftUpsertWithoutTeamsInputSchema';
import { WorkShiftWhereUniqueInputSchema } from './WorkShiftWhereUniqueInputSchema';
import { WorkShiftUpdateToOneWithWhereWithoutTeamsInputSchema } from './WorkShiftUpdateToOneWithWhereWithoutTeamsInputSchema';
import { WorkShiftUpdateWithoutTeamsInputSchema } from './WorkShiftUpdateWithoutTeamsInputSchema';
import { WorkShiftUncheckedUpdateWithoutTeamsInputSchema } from './WorkShiftUncheckedUpdateWithoutTeamsInputSchema';

export const WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.WorkShiftUpdateOneRequiredWithoutTeamsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkShiftCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => WorkShiftUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => WorkShiftWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkShiftUpdateToOneWithWhereWithoutTeamsInputSchema), z.lazy(() => WorkShiftUpdateWithoutTeamsInputSchema), z.lazy(() => WorkShiftUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
});

export default WorkShiftUpdateOneRequiredWithoutTeamsNestedInputSchema;
