import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema';
import { WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema';
import { WorkShiftUpsertWithoutWorkShiftDaysInputSchema } from './WorkShiftUpsertWithoutWorkShiftDaysInputSchema';
import { WorkShiftWhereUniqueInputSchema } from './WorkShiftWhereUniqueInputSchema';
import { WorkShiftUpdateToOneWithWhereWithoutWorkShiftDaysInputSchema } from './WorkShiftUpdateToOneWithWhereWithoutWorkShiftDaysInputSchema';
import { WorkShiftUpdateWithoutWorkShiftDaysInputSchema } from './WorkShiftUpdateWithoutWorkShiftDaysInputSchema';
import { WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema } from './WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema';

export const WorkShiftUpdateOneRequiredWithoutWorkShiftDaysNestedInputSchema: z.ZodType<Prisma.WorkShiftUpdateOneRequiredWithoutWorkShiftDaysNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkShiftCreateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedCreateWithoutWorkShiftDaysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkShiftCreateOrConnectWithoutWorkShiftDaysInputSchema).optional(),
  upsert: z.lazy(() => WorkShiftUpsertWithoutWorkShiftDaysInputSchema).optional(),
  connect: z.lazy(() => WorkShiftWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkShiftUpdateToOneWithWhereWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUpdateWithoutWorkShiftDaysInputSchema), z.lazy(() => WorkShiftUncheckedUpdateWithoutWorkShiftDaysInputSchema) ]).optional(),
});

export default WorkShiftUpdateOneRequiredWithoutWorkShiftDaysNestedInputSchema;
