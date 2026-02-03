import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutStaffInputSchema } from './IncidentStaffCreateWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateWithoutStaffInputSchema';
import { IncidentStaffCreateOrConnectWithoutStaffInputSchema } from './IncidentStaffCreateOrConnectWithoutStaffInputSchema';
import { IncidentStaffUpsertWithWhereUniqueWithoutStaffInputSchema } from './IncidentStaffUpsertWithWhereUniqueWithoutStaffInputSchema';
import { IncidentStaffCreateManyStaffInputEnvelopeSchema } from './IncidentStaffCreateManyStaffInputEnvelopeSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateWithWhereUniqueWithoutStaffInputSchema } from './IncidentStaffUpdateWithWhereUniqueWithoutStaffInputSchema';
import { IncidentStaffUpdateManyWithWhereWithoutStaffInputSchema } from './IncidentStaffUpdateManyWithWhereWithoutStaffInputSchema';
import { IncidentStaffScalarWhereInputSchema } from './IncidentStaffScalarWhereInputSchema';

export const IncidentStaffUncheckedUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffCreateWithoutStaffInputSchema).array(), z.lazy(() => IncidentStaffUncheckedCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffCreateOrConnectWithoutStaffInputSchema), z.lazy(() => IncidentStaffCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentStaffUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => IncidentStaffUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentStaffUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => IncidentStaffUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentStaffUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => IncidentStaffUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentStaffScalarWhereInputSchema), z.lazy(() => IncidentStaffScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentStaffUncheckedUpdateManyWithoutStaffNestedInputSchema;
