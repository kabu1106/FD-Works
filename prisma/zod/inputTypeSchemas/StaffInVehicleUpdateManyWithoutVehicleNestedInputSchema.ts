import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleCreateWithoutVehicleInputSchema } from './StaffInVehicleCreateWithoutVehicleInputSchema';
import { StaffInVehicleUncheckedCreateWithoutVehicleInputSchema } from './StaffInVehicleUncheckedCreateWithoutVehicleInputSchema';
import { StaffInVehicleCreateOrConnectWithoutVehicleInputSchema } from './StaffInVehicleCreateOrConnectWithoutVehicleInputSchema';
import { StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema } from './StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema';
import { StaffInVehicleCreateManyVehicleInputEnvelopeSchema } from './StaffInVehicleCreateManyVehicleInputEnvelopeSchema';
import { StaffInVehicleWhereUniqueInputSchema } from './StaffInVehicleWhereUniqueInputSchema';
import { StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema } from './StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema';
import { StaffInVehicleUpdateManyWithWhereWithoutVehicleInputSchema } from './StaffInVehicleUpdateManyWithWhereWithoutVehicleInputSchema';
import { StaffInVehicleScalarWhereInputSchema } from './StaffInVehicleScalarWhereInputSchema';

export const StaffInVehicleUpdateManyWithoutVehicleNestedInputSchema: z.ZodType<Prisma.StaffInVehicleUpdateManyWithoutVehicleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffInVehicleCreateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleCreateWithoutVehicleInputSchema).array(), z.lazy(() => StaffInVehicleUncheckedCreateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUncheckedCreateWithoutVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StaffInVehicleCreateOrConnectWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleCreateOrConnectWithoutVehicleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StaffInVehicleCreateManyVehicleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StaffInVehicleWhereUniqueInputSchema), z.lazy(() => StaffInVehicleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StaffInVehicleWhereUniqueInputSchema), z.lazy(() => StaffInVehicleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StaffInVehicleWhereUniqueInputSchema), z.lazy(() => StaffInVehicleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StaffInVehicleWhereUniqueInputSchema), z.lazy(() => StaffInVehicleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StaffInVehicleUpdateManyWithWhereWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUpdateManyWithWhereWithoutVehicleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StaffInVehicleScalarWhereInputSchema), z.lazy(() => StaffInVehicleScalarWhereInputSchema).array() ]).optional(),
});

export default StaffInVehicleUpdateManyWithoutVehicleNestedInputSchema;
