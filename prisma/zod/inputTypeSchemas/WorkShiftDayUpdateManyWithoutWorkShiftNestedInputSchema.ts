import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayCreateWithoutWorkShiftInputSchema } from './WorkShiftDayCreateWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema';
import { WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema } from './WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema';
import { WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInputSchema } from './WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInputSchema';
import { WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema } from './WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema';
import { WorkShiftDayWhereUniqueInputSchema } from './WorkShiftDayWhereUniqueInputSchema';
import { WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInputSchema } from './WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInputSchema';
import { WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInputSchema } from './WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInputSchema';
import { WorkShiftDayScalarWhereInputSchema } from './WorkShiftDayScalarWhereInputSchema';

export const WorkShiftDayUpdateManyWithoutWorkShiftNestedInputSchema: z.ZodType<Prisma.WorkShiftDayUpdateManyWithoutWorkShiftNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkShiftDayCreateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayCreateWithoutWorkShiftInputSchema).array(), z.lazy(() => WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkShiftDayWhereUniqueInputSchema), z.lazy(() => WorkShiftDayWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkShiftDayWhereUniqueInputSchema), z.lazy(() => WorkShiftDayWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkShiftDayWhereUniqueInputSchema), z.lazy(() => WorkShiftDayWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkShiftDayWhereUniqueInputSchema), z.lazy(() => WorkShiftDayWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUpdateManyWithWhereWithoutWorkShiftInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkShiftDayScalarWhereInputSchema), z.lazy(() => WorkShiftDayScalarWhereInputSchema).array() ]).optional(),
});

export default WorkShiftDayUpdateManyWithoutWorkShiftNestedInputSchema;
