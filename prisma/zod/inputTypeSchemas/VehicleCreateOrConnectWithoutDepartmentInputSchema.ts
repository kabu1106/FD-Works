import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';
import { VehicleCreateWithoutDepartmentInputSchema } from './VehicleCreateWithoutDepartmentInputSchema';
import { VehicleUncheckedCreateWithoutDepartmentInputSchema } from './VehicleUncheckedCreateWithoutDepartmentInputSchema';

export const VehicleCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => VehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VehicleCreateWithoutDepartmentInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutDepartmentInputSchema) ]),
});

export default VehicleCreateOrConnectWithoutDepartmentInputSchema;
