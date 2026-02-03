import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateWithoutVehicleInputSchema } from './IncidentVehicleCreateWithoutVehicleInputSchema';
import { IncidentVehicleUncheckedCreateWithoutVehicleInputSchema } from './IncidentVehicleUncheckedCreateWithoutVehicleInputSchema';
import { IncidentVehicleCreateOrConnectWithoutVehicleInputSchema } from './IncidentVehicleCreateOrConnectWithoutVehicleInputSchema';
import { IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema } from './IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema';
import { IncidentVehicleCreateManyVehicleInputEnvelopeSchema } from './IncidentVehicleCreateManyVehicleInputEnvelopeSchema';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema } from './IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema';
import { IncidentVehicleUpdateManyWithWhereWithoutVehicleInputSchema } from './IncidentVehicleUpdateManyWithWhereWithoutVehicleInputSchema';
import { IncidentVehicleScalarWhereInputSchema } from './IncidentVehicleScalarWhereInputSchema';

export const IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateManyWithoutVehicleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleCreateWithoutVehicleInputSchema).array(), z.lazy(() => IncidentVehicleUncheckedCreateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentVehicleCreateOrConnectWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleCreateOrConnectWithoutVehicleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentVehicleCreateManyVehicleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentVehicleUpdateManyWithWhereWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUpdateManyWithWhereWithoutVehicleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentVehicleScalarWhereInputSchema), z.lazy(() => IncidentVehicleScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema;
