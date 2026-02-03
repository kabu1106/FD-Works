import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleCreateWithoutDepartmentInputSchema } from './VehicleCreateWithoutDepartmentInputSchema';
import { VehicleUncheckedCreateWithoutDepartmentInputSchema } from './VehicleUncheckedCreateWithoutDepartmentInputSchema';
import { VehicleCreateOrConnectWithoutDepartmentInputSchema } from './VehicleCreateOrConnectWithoutDepartmentInputSchema';
import { VehicleUpsertWithWhereUniqueWithoutDepartmentInputSchema } from './VehicleUpsertWithWhereUniqueWithoutDepartmentInputSchema';
import { VehicleCreateManyDepartmentInputEnvelopeSchema } from './VehicleCreateManyDepartmentInputEnvelopeSchema';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';
import { VehicleUpdateWithWhereUniqueWithoutDepartmentInputSchema } from './VehicleUpdateWithWhereUniqueWithoutDepartmentInputSchema';
import { VehicleUpdateManyWithWhereWithoutDepartmentInputSchema } from './VehicleUpdateManyWithWhereWithoutDepartmentInputSchema';
import { VehicleScalarWhereInputSchema } from './VehicleScalarWhereInputSchema';

export const VehicleUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.VehicleUpdateManyWithoutDepartmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VehicleCreateWithoutDepartmentInputSchema), z.lazy(() => VehicleCreateWithoutDepartmentInputSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VehicleCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => VehicleCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VehicleUpsertWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => VehicleUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VehicleCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VehicleWhereUniqueInputSchema), z.lazy(() => VehicleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VehicleWhereUniqueInputSchema), z.lazy(() => VehicleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VehicleWhereUniqueInputSchema), z.lazy(() => VehicleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VehicleWhereUniqueInputSchema), z.lazy(() => VehicleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VehicleUpdateWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => VehicleUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VehicleUpdateManyWithWhereWithoutDepartmentInputSchema), z.lazy(() => VehicleUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VehicleScalarWhereInputSchema), z.lazy(() => VehicleScalarWhereInputSchema).array() ]).optional(),
});

export default VehicleUpdateManyWithoutDepartmentNestedInputSchema;
