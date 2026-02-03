import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUpsertWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUpsertWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema';

export const AllowanceTypeUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AllowanceTypeCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema).optional(),
  upsert: z.lazy(() => AllowanceTypeUpsertWithoutIncidentAllowanceSummaryInputSchema).optional(),
  connect: z.lazy(() => AllowanceTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AllowanceTypeUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema) ]).optional(),
});

export default AllowanceTypeUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema;
