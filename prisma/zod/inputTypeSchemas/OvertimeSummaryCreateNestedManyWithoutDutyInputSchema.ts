import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateWithoutDutyInputSchema } from './OvertimeSummaryCreateWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDutyInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDutyInputSchema';
import { OvertimeSummaryCreateOrConnectWithoutDutyInputSchema } from './OvertimeSummaryCreateOrConnectWithoutDutyInputSchema';
import { OvertimeSummaryCreateManyDutyInputEnvelopeSchema } from './OvertimeSummaryCreateManyDutyInputEnvelopeSchema';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';

export const OvertimeSummaryCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryCreateWithoutDutyInputSchema).array(), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryCreateOrConnectWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
});

export default OvertimeSummaryCreateNestedManyWithoutDutyInputSchema;
