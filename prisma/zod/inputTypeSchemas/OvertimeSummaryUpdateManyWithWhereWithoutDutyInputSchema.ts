import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryScalarWhereInputSchema } from './OvertimeSummaryScalarWhereInputSchema';
import { OvertimeSummaryUpdateManyMutationInputSchema } from './OvertimeSummaryUpdateManyMutationInputSchema';
import { OvertimeSummaryUncheckedUpdateManyWithoutDutyInputSchema } from './OvertimeSummaryUncheckedUpdateManyWithoutDutyInputSchema';

export const OvertimeSummaryUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryUpdateManyMutationInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default OvertimeSummaryUpdateManyWithWhereWithoutDutyInputSchema;
