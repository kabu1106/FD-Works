import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryScalarWhereInputSchema } from './IncidentAllowanceSummaryScalarWhereInputSchema';
import { IncidentAllowanceSummaryUpdateManyMutationInputSchema } from './IncidentAllowanceSummaryUpdateManyMutationInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateManyWithoutAllowanceTypeInputSchema';

export const IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateManyMutationInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateManyWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInputSchema;
