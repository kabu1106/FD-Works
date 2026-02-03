import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema } from './IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceScalarWhereInputSchema } from './IncidentStaffAllowanceScalarWhereInputSchema';

export const IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema).array(), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema), z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema;
