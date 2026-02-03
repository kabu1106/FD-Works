import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';

export const IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema).optional(),
  connect: z.lazy(() => IncidentStaffWhereUniqueInputSchema).optional(),
});

export default IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema;
