import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateWithoutIncidentVehicleInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema';
import { IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema';
import { IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInputSchema } from './IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInputSchema';
import { IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema } from './IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInputSchema } from './IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInputSchema';
import { IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInputSchema } from './IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInputSchema';
import { IncidentStaffScalarWhereInputSchema } from './IncidentStaffScalarWhereInputSchema';

export const IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema: z.ZodType<Prisma.IncidentStaffUpdateManyWithoutIncidentVehicleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffCreateWithoutIncidentVehicleInputSchema).array(), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentStaffScalarWhereInputSchema), z.lazy(() => IncidentStaffScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema;
