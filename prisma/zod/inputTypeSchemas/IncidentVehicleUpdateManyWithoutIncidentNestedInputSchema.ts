import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateWithoutIncidentInputSchema } from './IncidentVehicleCreateWithoutIncidentInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentInputSchema';
import { IncidentVehicleCreateOrConnectWithoutIncidentInputSchema } from './IncidentVehicleCreateOrConnectWithoutIncidentInputSchema';
import { IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema } from './IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema';
import { IncidentVehicleCreateManyIncidentInputEnvelopeSchema } from './IncidentVehicleCreateManyIncidentInputEnvelopeSchema';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema } from './IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema';
import { IncidentVehicleUpdateManyWithWhereWithoutIncidentInputSchema } from './IncidentVehicleUpdateManyWithWhereWithoutIncidentInputSchema';
import { IncidentVehicleScalarWhereInputSchema } from './IncidentVehicleScalarWhereInputSchema';

export const IncidentVehicleUpdateManyWithoutIncidentNestedInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateManyWithoutIncidentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleCreateWithoutIncidentInputSchema).array(), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentVehicleCreateOrConnectWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleCreateOrConnectWithoutIncidentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentVehicleCreateManyIncidentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentVehicleUpdateManyWithWhereWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUpdateManyWithWhereWithoutIncidentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentVehicleScalarWhereInputSchema), z.lazy(() => IncidentVehicleScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentVehicleUpdateManyWithoutIncidentNestedInputSchema;
