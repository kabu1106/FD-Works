import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeCreateWithoutStaffInputSchema } from './DutyDayTypeCreateWithoutStaffInputSchema';
import { DutyDayTypeUncheckedCreateWithoutStaffInputSchema } from './DutyDayTypeUncheckedCreateWithoutStaffInputSchema';
import { DutyDayTypeCreateOrConnectWithoutStaffInputSchema } from './DutyDayTypeCreateOrConnectWithoutStaffInputSchema';
import { DutyDayTypeCreateManyStaffInputEnvelopeSchema } from './DutyDayTypeCreateManyStaffInputEnvelopeSchema';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';

export const DutyDayTypeCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeCreateWithoutStaffInputSchema).array(), z.lazy(() => DutyDayTypeUncheckedCreateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DutyDayTypeCreateOrConnectWithoutStaffInputSchema), z.lazy(() => DutyDayTypeCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DutyDayTypeCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
});

export default DutyDayTypeCreateNestedManyWithoutStaffInputSchema;
