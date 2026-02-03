import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayCreateWithoutWorkShiftInputSchema } from './WorkShiftDayCreateWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema';
import { WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema } from './WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema';
import { WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema } from './WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema';
import { WorkShiftDayWhereUniqueInputSchema } from './WorkShiftDayWhereUniqueInputSchema';

export const WorkShiftDayUncheckedCreateNestedManyWithoutWorkShiftInputSchema: z.ZodType<Prisma.WorkShiftDayUncheckedCreateNestedManyWithoutWorkShiftInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkShiftDayCreateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayCreateWithoutWorkShiftInputSchema).array(), z.lazy(() => WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkShiftDayWhereUniqueInputSchema), z.lazy(() => WorkShiftDayWhereUniqueInputSchema).array() ]).optional(),
});

export default WorkShiftDayUncheckedCreateNestedManyWithoutWorkShiftInputSchema;
