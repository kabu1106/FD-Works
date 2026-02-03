import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';

export const AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]),
});

export default AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema;
