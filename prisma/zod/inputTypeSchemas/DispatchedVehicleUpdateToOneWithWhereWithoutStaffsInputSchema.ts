import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';
import { DispatchedVehicleUpdateWithoutStaffsInputSchema } from './DispatchedVehicleUpdateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema';

export const DispatchedVehicleUpdateToOneWithWhereWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleUpdateToOneWithWhereWithoutStaffsInput> = z.strictObject({
  where: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DispatchedVehicleUpdateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema) ]),
});

export default DispatchedVehicleUpdateToOneWithWhereWithoutStaffsInputSchema;
