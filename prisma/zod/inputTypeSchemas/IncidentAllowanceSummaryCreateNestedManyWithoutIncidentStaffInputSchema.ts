import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema } from './IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';

export const IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema).array(), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema;
