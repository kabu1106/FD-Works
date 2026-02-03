import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateWithoutStaffInputSchema } from './OvertimeSummaryUpdateWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutStaffInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutStaffInputSchema';

export const OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryUpdateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInputSchema;
