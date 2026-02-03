import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentUpdateWithoutVehicleInputSchema } from './DepartmentUpdateWithoutVehicleInputSchema';
import { DepartmentUncheckedUpdateWithoutVehicleInputSchema } from './DepartmentUncheckedUpdateWithoutVehicleInputSchema';
import { DepartmentCreateWithoutVehicleInputSchema } from './DepartmentCreateWithoutVehicleInputSchema';
import { DepartmentUncheckedCreateWithoutVehicleInputSchema } from './DepartmentUncheckedCreateWithoutVehicleInputSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentUpsertWithoutVehicleInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutVehicleInput> = z.strictObject({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutVehicleInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutVehicleInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
});

export default DepartmentUpsertWithoutVehicleInputSchema;
