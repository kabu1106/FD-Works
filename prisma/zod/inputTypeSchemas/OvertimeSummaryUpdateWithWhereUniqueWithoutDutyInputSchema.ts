import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateWithoutDutyInputSchema } from './OvertimeSummaryUpdateWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutDutyInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutDutyInputSchema';

export const OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryUpdateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInputSchema;
