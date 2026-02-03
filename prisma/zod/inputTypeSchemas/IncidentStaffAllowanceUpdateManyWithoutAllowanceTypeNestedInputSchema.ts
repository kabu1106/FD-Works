import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema } from './IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceScalarWhereInputSchema } from './IncidentStaffAllowanceScalarWhereInputSchema';

export const IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema).array(), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema), z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema;
