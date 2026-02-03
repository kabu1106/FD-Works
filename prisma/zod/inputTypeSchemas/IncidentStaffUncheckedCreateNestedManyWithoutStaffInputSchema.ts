import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutStaffInputSchema } from './IncidentStaffCreateWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateWithoutStaffInputSchema';
import { IncidentStaffCreateOrConnectWithoutStaffInputSchema } from './IncidentStaffCreateOrConnectWithoutStaffInputSchema';
import { IncidentStaffCreateManyStaffInputEnvelopeSchema } from './IncidentStaffCreateManyStaffInputEnvelopeSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';

export const IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffCreateWithoutStaffInputSchema).array(), z.lazy(() => IncidentStaffUncheckedCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffCreateOrConnectWithoutStaffInputSchema), z.lazy(() => IncidentStaffCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema;
