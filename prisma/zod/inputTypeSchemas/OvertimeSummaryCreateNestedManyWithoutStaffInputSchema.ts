import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateWithoutStaffInputSchema } from './OvertimeSummaryCreateWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateWithoutStaffInputSchema';
import { OvertimeSummaryCreateOrConnectWithoutStaffInputSchema } from './OvertimeSummaryCreateOrConnectWithoutStaffInputSchema';
import { OvertimeSummaryCreateManyStaffInputEnvelopeSchema } from './OvertimeSummaryCreateManyStaffInputEnvelopeSchema';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';

export const OvertimeSummaryCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryCreateWithoutStaffInputSchema).array(), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryCreateOrConnectWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
});

export default OvertimeSummaryCreateNestedManyWithoutStaffInputSchema;
