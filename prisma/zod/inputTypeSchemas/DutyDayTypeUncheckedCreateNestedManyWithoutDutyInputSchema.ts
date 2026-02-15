import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeCreateWithoutDutyInputSchema } from './DutyDayTypeCreateWithoutDutyInputSchema';
import { DutyDayTypeUncheckedCreateWithoutDutyInputSchema } from './DutyDayTypeUncheckedCreateWithoutDutyInputSchema';
import { DutyDayTypeCreateOrConnectWithoutDutyInputSchema } from './DutyDayTypeCreateOrConnectWithoutDutyInputSchema';
import { DutyDayTypeCreateManyDutyInputEnvelopeSchema } from './DutyDayTypeCreateManyDutyInputEnvelopeSchema';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';

export const DutyDayTypeUncheckedCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.DutyDayTypeUncheckedCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeCreateWithoutDutyInputSchema).array(), z.lazy(() => DutyDayTypeUncheckedCreateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DutyDayTypeCreateOrConnectWithoutDutyInputSchema), z.lazy(() => DutyDayTypeCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DutyDayTypeCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
});

export default DutyDayTypeUncheckedCreateNestedManyWithoutDutyInputSchema;
