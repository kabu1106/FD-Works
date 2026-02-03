import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';
import { OvertimeSummaryUpdateWithoutDetailsInputSchema } from './OvertimeSummaryUpdateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema';

export const OvertimeSummaryUpdateToOneWithWhereWithoutDetailsInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateToOneWithWhereWithoutDetailsInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OvertimeSummaryUpdateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema) ]),
});

export default OvertimeSummaryUpdateToOneWithWhereWithoutDetailsInputSchema;
