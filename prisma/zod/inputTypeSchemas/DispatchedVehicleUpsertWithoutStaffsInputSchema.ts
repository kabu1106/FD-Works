import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleUpdateWithoutStaffsInputSchema } from './DispatchedVehicleUpdateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema';
import { DispatchedVehicleCreateWithoutStaffsInputSchema } from './DispatchedVehicleCreateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';

export const DispatchedVehicleUpsertWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleUpsertWithoutStaffsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DispatchedVehicleUpdateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema) ]),
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema) ]),
  where: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
});

export default DispatchedVehicleUpsertWithoutStaffsInputSchema;
