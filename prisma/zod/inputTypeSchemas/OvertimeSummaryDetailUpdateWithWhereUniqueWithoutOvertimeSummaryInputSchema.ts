import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailUpdateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUpdateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedUpdateWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]),
});

export default OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInputSchema;
