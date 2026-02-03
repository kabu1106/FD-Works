import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutOvertimeSummaryInputSchema } from './StaffCreateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedCreateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedCreateWithoutOvertimeSummaryInputSchema';

export const StaffCreateOrConnectWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedCreateWithoutOvertimeSummaryInputSchema) ]),
});

export default StaffCreateOrConnectWithoutOvertimeSummaryInputSchema;
