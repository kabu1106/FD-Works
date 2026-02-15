import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffCreateWithoutStaffInputSchema } from './WeeklyDayOffCreateWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedCreateWithoutStaffInputSchema } from './WeeklyDayOffUncheckedCreateWithoutStaffInputSchema';
import { WeeklyDayOffCreateOrConnectWithoutStaffInputSchema } from './WeeklyDayOffCreateOrConnectWithoutStaffInputSchema';
import { WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInputSchema } from './WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInputSchema';
import { WeeklyDayOffCreateManyStaffInputEnvelopeSchema } from './WeeklyDayOffCreateManyStaffInputEnvelopeSchema';
import { WeeklyDayOffWhereUniqueInputSchema } from './WeeklyDayOffWhereUniqueInputSchema';
import { WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInputSchema } from './WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInputSchema';
import { WeeklyDayOffUpdateManyWithWhereWithoutStaffInputSchema } from './WeeklyDayOffUpdateManyWithWhereWithoutStaffInputSchema';
import { WeeklyDayOffScalarWhereInputSchema } from './WeeklyDayOffScalarWhereInputSchema';

export const WeeklyDayOffUncheckedUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.WeeklyDayOffUncheckedUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WeeklyDayOffCreateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffCreateWithoutStaffInputSchema).array(), z.lazy(() => WeeklyDayOffUncheckedCreateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeeklyDayOffCreateOrConnectWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeeklyDayOffCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WeeklyDayOffWhereUniqueInputSchema), z.lazy(() => WeeklyDayOffWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WeeklyDayOffWhereUniqueInputSchema), z.lazy(() => WeeklyDayOffWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WeeklyDayOffWhereUniqueInputSchema), z.lazy(() => WeeklyDayOffWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WeeklyDayOffWhereUniqueInputSchema), z.lazy(() => WeeklyDayOffWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WeeklyDayOffUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WeeklyDayOffScalarWhereInputSchema), z.lazy(() => WeeklyDayOffScalarWhereInputSchema).array() ]).optional(),
});

export default WeeklyDayOffUncheckedUpdateManyWithoutStaffNestedInputSchema;
