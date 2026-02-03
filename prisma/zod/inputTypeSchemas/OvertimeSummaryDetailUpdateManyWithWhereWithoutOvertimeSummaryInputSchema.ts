import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailScalarWhereInputSchema } from './OvertimeSummaryDetailScalarWhereInputSchema';
import { OvertimeSummaryDetailUpdateManyMutationInputSchema } from './OvertimeSummaryDetailUpdateManyMutationInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateManyWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedUpdateManyWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateManyMutationInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedUpdateManyWithoutOvertimeSummaryInputSchema) ]),
});

export default OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInputSchema;
