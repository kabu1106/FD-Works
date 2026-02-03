import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutOvertimeSummaryInputSchema } from './DutyUpdateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema';

export const DutyUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema;
