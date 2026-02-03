import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema) ]),
});

export default OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema;
