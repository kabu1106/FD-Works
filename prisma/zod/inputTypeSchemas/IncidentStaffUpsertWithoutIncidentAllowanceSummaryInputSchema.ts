import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';

export const IncidentStaffUpsertWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffUpsertWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]),
  where: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
});

export default IncidentStaffUpsertWithoutIncidentAllowanceSummaryInputSchema;
