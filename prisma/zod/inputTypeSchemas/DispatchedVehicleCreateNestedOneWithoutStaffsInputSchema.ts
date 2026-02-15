import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateWithoutStaffsInputSchema } from './DispatchedVehicleCreateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema';
import { DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema } from './DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';

export const DispatchedVehicleCreateNestedOneWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateNestedOneWithoutStaffsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema).optional(),
  connect: z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).optional(),
});

export default DispatchedVehicleCreateNestedOneWithoutStaffsInputSchema;
