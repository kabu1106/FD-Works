import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailUpdateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUpdateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedUpdateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema) ]),
});

export default OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInputSchema;
