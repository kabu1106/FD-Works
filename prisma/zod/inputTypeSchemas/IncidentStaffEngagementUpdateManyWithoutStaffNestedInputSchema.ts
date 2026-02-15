import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementCreateWithoutStaffInputSchema } from './IncidentStaffEngagementCreateWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema';
import { IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema } from './IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema';
import { IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInputSchema } from './IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInputSchema';
import { IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema } from './IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInputSchema } from './IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInputSchema';
import { IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInputSchema } from './IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInputSchema';
import { IncidentStaffEngagementScalarWhereInputSchema } from './IncidentStaffEngagementScalarWhereInputSchema';

export const IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementCreateWithoutStaffInputSchema).array(), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema), z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema;
