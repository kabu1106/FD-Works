import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryCreateWithoutStaffInputSchema } from './OvertimeSummaryCreateWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateWithoutStaffInputSchema';

export const OvertimeSummaryCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutStaffInputSchema) ]),
});

export default OvertimeSummaryCreateOrConnectWithoutStaffInputSchema;
