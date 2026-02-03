import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';
import { AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema';

export const AllowanceTypeUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema) ]),
});

export default AllowanceTypeUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema;
