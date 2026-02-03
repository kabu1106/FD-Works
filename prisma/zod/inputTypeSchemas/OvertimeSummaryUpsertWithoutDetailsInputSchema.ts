import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryUpdateWithoutDetailsInputSchema } from './OvertimeSummaryUpdateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema';
import { OvertimeSummaryCreateWithoutDetailsInputSchema } from './OvertimeSummaryCreateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';

export const OvertimeSummaryUpsertWithoutDetailsInputSchema: z.ZodType<Prisma.OvertimeSummaryUpsertWithoutDetailsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OvertimeSummaryUpdateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema) ]),
  where: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
});

export default OvertimeSummaryUpsertWithoutDetailsInputSchema;
