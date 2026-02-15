import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffCreateWithoutStaffInputSchema } from './WeeklyDayOffCreateWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedCreateWithoutStaffInputSchema } from './WeeklyDayOffUncheckedCreateWithoutStaffInputSchema';
import { WeeklyDayOffCreateOrConnectWithoutStaffInputSchema } from './WeeklyDayOffCreateOrConnectWithoutStaffInputSchema';
import { WeeklyDayOffCreateManyStaffInputEnvelopeSchema } from './WeeklyDayOffCreateManyStaffInputEnvelopeSchema';
import { WeeklyDayOffWhereUniqueInputSchema } from './WeeklyDayOffWhereUniqueInputSchema';

export const WeeklyDayOffCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => WeeklyDayOffCreateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffCreateWithoutStaffInputSchema).array(), z.lazy(() => WeeklyDayOffUncheckedCreateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeeklyDayOffCreateOrConnectWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeeklyDayOffCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WeeklyDayOffWhereUniqueInputSchema), z.lazy(() => WeeklyDayOffWhereUniqueInputSchema).array() ]).optional(),
});

export default WeeklyDayOffCreateNestedManyWithoutStaffInputSchema;
