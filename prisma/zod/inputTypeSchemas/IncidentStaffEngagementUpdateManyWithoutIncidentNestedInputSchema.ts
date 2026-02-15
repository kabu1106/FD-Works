import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema';
import { IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema';
import { IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInputSchema } from './IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInputSchema';
import { IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema } from './IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInputSchema } from './IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInputSchema';
import { IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInputSchema } from './IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInputSchema';
import { IncidentStaffEngagementScalarWhereInputSchema } from './IncidentStaffEngagementScalarWhereInputSchema';

export const IncidentStaffEngagementUpdateManyWithoutIncidentNestedInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateManyWithoutIncidentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementCreateWithoutIncidentInputSchema).array(), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema), z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema), z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentStaffEngagementUpdateManyWithoutIncidentNestedInputSchema;
