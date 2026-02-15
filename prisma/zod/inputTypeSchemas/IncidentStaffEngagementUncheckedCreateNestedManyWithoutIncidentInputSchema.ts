import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema';
import { IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema';
import { IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema } from './IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';

export const IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementCreateWithoutIncidentInputSchema).array(), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema;
