import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';
import { VehicleUpdateWithoutDepartmentInputSchema } from './VehicleUpdateWithoutDepartmentInputSchema';
import { VehicleUncheckedUpdateWithoutDepartmentInputSchema } from './VehicleUncheckedUpdateWithoutDepartmentInputSchema';

export const VehicleUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => VehicleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VehicleUpdateWithoutDepartmentInputSchema), z.lazy(() => VehicleUncheckedUpdateWithoutDepartmentInputSchema) ]),
});

export default VehicleUpdateWithWhereUniqueWithoutDepartmentInputSchema;
