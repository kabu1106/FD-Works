import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleCreateWithoutDepartmentInputSchema } from './VehicleCreateWithoutDepartmentInputSchema';
import { VehicleUncheckedCreateWithoutDepartmentInputSchema } from './VehicleUncheckedCreateWithoutDepartmentInputSchema';
import { VehicleCreateOrConnectWithoutDepartmentInputSchema } from './VehicleCreateOrConnectWithoutDepartmentInputSchema';
import { VehicleCreateManyDepartmentInputEnvelopeSchema } from './VehicleCreateManyDepartmentInputEnvelopeSchema';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';

export const VehicleCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleCreateNestedManyWithoutDepartmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => VehicleCreateWithoutDepartmentInputSchema), z.lazy(() => VehicleCreateWithoutDepartmentInputSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VehicleCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => VehicleCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VehicleCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VehicleWhereUniqueInputSchema), z.lazy(() => VehicleWhereUniqueInputSchema).array() ]).optional(),
});

export default VehicleCreateNestedManyWithoutDepartmentInputSchema;
