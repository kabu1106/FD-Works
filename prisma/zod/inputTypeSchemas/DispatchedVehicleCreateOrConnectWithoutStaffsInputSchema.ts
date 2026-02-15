import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';
import { DispatchedVehicleCreateWithoutStaffsInputSchema } from './DispatchedVehicleCreateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema';

export const DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateOrConnectWithoutStaffsInput> = z.strictObject({
  where: z.lazy(() => DispatchedVehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema) ]),
});

export default DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema;
