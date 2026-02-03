import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutVehicleInputSchema } from './DepartmentCreateWithoutVehicleInputSchema';
import { DepartmentUncheckedCreateWithoutVehicleInputSchema } from './DepartmentUncheckedCreateWithoutVehicleInputSchema';
import { DepartmentCreateOrConnectWithoutVehicleInputSchema } from './DepartmentCreateOrConnectWithoutVehicleInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';

export const DepartmentCreateNestedOneWithoutVehicleInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutVehicleInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutVehicleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutVehicleInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
});

export default DepartmentCreateNestedOneWithoutVehicleInputSchema;
