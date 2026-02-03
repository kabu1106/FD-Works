import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutOvertimeSummaryInputSchema } from './DutyCreateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedCreateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedCreateWithoutOvertimeSummaryInputSchema';

export const DutyCreateOrConnectWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedCreateWithoutOvertimeSummaryInputSchema) ]),
});

export default DutyCreateOrConnectWithoutOvertimeSummaryInputSchema;
