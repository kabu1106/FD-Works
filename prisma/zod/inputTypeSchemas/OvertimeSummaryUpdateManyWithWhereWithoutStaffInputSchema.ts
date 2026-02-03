import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryScalarWhereInputSchema } from './OvertimeSummaryScalarWhereInputSchema';
import { OvertimeSummaryUpdateManyMutationInputSchema } from './OvertimeSummaryUpdateManyMutationInputSchema';
import { OvertimeSummaryUncheckedUpdateManyWithoutStaffInputSchema } from './OvertimeSummaryUncheckedUpdateManyWithoutStaffInputSchema';

export const OvertimeSummaryUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryUpdateManyMutationInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default OvertimeSummaryUpdateManyWithWhereWithoutStaffInputSchema;
