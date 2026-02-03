import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleScalarWhereInputSchema } from './VehicleScalarWhereInputSchema';
import { VehicleUpdateManyMutationInputSchema } from './VehicleUpdateManyMutationInputSchema';
import { VehicleUncheckedUpdateManyWithoutDepartmentInputSchema } from './VehicleUncheckedUpdateManyWithoutDepartmentInputSchema';

export const VehicleUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => VehicleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VehicleUpdateManyMutationInputSchema), z.lazy(() => VehicleUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
});

export default VehicleUpdateManyWithWhereWithoutDepartmentInputSchema;
