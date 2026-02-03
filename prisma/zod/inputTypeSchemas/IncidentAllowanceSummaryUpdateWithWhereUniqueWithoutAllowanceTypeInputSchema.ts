import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateWithoutAllowanceTypeInputSchema';

export const IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema;
