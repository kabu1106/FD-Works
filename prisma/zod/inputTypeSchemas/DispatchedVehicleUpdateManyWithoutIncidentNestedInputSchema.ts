import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateWithoutIncidentInputSchema } from './DispatchedVehicleCreateWithoutIncidentInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema';
import { DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema } from './DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema';
import { DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema } from './DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema';
import { DispatchedVehicleCreateManyIncidentInputEnvelopeSchema } from './DispatchedVehicleCreateManyIncidentInputEnvelopeSchema';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';
import { DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema } from './DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema';
import { DispatchedVehicleUpdateManyWithWhereWithoutIncidentInputSchema } from './DispatchedVehicleUpdateManyWithWhereWithoutIncidentInputSchema';
import { DispatchedVehicleScalarWhereInputSchema } from './DispatchedVehicleScalarWhereInputSchema';

export const DispatchedVehicleUpdateManyWithoutIncidentNestedInputSchema: z.ZodType<Prisma.DispatchedVehicleUpdateManyWithoutIncidentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleCreateWithoutIncidentInputSchema).array(), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DispatchedVehicleCreateManyIncidentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DispatchedVehicleWhereUniqueInputSchema), z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DispatchedVehicleWhereUniqueInputSchema), z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DispatchedVehicleWhereUniqueInputSchema), z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DispatchedVehicleWhereUniqueInputSchema), z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DispatchedVehicleUpdateManyWithWhereWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUpdateManyWithWhereWithoutIncidentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DispatchedVehicleScalarWhereInputSchema), z.lazy(() => DispatchedVehicleScalarWhereInputSchema).array() ]).optional(),
});

export default DispatchedVehicleUpdateManyWithoutIncidentNestedInputSchema;
