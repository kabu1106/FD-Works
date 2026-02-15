import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementCreateWithoutStaffInputSchema } from './IncidentStaffEngagementCreateWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema';
import { IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema } from './IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema';
import { IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema } from './IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';

export const IncidentStaffEngagementCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementCreateWithoutStaffInputSchema).array(), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentStaffEngagementCreateNestedManyWithoutStaffInputSchema;
