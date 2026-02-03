import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { DepartmentUpdateWithoutVehicleInputSchema } from './DepartmentUpdateWithoutVehicleInputSchema';
import { DepartmentUncheckedUpdateWithoutVehicleInputSchema } from './DepartmentUncheckedUpdateWithoutVehicleInputSchema';

export const DepartmentUpdateToOneWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutVehicleInputSchema) ]),
});

export default DepartmentUpdateToOneWithWhereWithoutVehicleInputSchema;
