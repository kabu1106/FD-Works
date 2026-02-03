import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUpsertWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUpsertWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema';

export const IncidentStaffUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema: z.ZodType<Prisma.IncidentStaffUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema).optional(),
  upsert: z.lazy(() => IncidentStaffUpsertWithoutIncidentAllowanceSummaryInputSchema).optional(),
  connect: z.lazy(() => IncidentStaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentStaffUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema) ]).optional(),
});

export default IncidentStaffUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema;
