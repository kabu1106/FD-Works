import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const AllowanceTypeUpsertWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeUpsertWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  update: z.union([ z.lazy(() => AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]),
  where: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
});

export default AllowanceTypeUpsertWithoutIncidentAllowanceSummaryInputSchema;
