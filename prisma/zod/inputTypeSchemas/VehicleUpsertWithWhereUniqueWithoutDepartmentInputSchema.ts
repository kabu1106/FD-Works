import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';
import { VehicleUpdateWithoutDepartmentInputSchema } from './VehicleUpdateWithoutDepartmentInputSchema';
import { VehicleUncheckedUpdateWithoutDepartmentInputSchema } from './VehicleUncheckedUpdateWithoutDepartmentInputSchema';
import { VehicleCreateWithoutDepartmentInputSchema } from './VehicleCreateWithoutDepartmentInputSchema';
import { VehicleUncheckedCreateWithoutDepartmentInputSchema } from './VehicleUncheckedCreateWithoutDepartmentInputSchema';

export const VehicleUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => VehicleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VehicleUpdateWithoutDepartmentInputSchema), z.lazy(() => VehicleUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => VehicleCreateWithoutDepartmentInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutDepartmentInputSchema) ]),
});

export default VehicleUpsertWithWhereUniqueWithoutDepartmentInputSchema;
