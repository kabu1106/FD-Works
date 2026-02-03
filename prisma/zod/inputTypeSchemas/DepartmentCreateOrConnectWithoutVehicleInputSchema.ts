import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentCreateWithoutVehicleInputSchema } from './DepartmentCreateWithoutVehicleInputSchema';
import { DepartmentUncheckedCreateWithoutVehicleInputSchema } from './DepartmentUncheckedCreateWithoutVehicleInputSchema';

export const DepartmentCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutVehicleInputSchema) ]),
});

export default DepartmentCreateOrConnectWithoutVehicleInputSchema;
