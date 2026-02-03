import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutOvertimeSummaryInputSchema } from './DutyUpdateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema';
import { DutyCreateWithoutOvertimeSummaryInputSchema } from './DutyCreateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedCreateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.DutyUpsertWithoutOvertimeSummaryInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedCreateWithoutOvertimeSummaryInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutOvertimeSummaryInputSchema;
