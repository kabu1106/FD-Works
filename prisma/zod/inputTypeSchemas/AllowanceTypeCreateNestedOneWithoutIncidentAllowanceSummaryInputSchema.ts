import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';

export const AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema).optional(),
  connect: z.lazy(() => AllowanceTypeWhereUniqueInputSchema).optional(),
});

export default AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema;
