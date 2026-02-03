import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema';

export const IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInputSchema;
