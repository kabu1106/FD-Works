import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateWithoutStaffsInputSchema } from './DispatchedVehicleCreateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema';
import { DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema } from './DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema';
import { DispatchedVehicleUpsertWithoutStaffsInputSchema } from './DispatchedVehicleUpsertWithoutStaffsInputSchema';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';
import { DispatchedVehicleUpdateToOneWithWhereWithoutStaffsInputSchema } from './DispatchedVehicleUpdateToOneWithWhereWithoutStaffsInputSchema';
import { DispatchedVehicleUpdateWithoutStaffsInputSchema } from './DispatchedVehicleUpdateWithoutStaffsInputSchema';
import { DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema } from './DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema';

export const DispatchedVehicleUpdateOneRequiredWithoutStaffsNestedInputSchema: z.ZodType<Prisma.DispatchedVehicleUpdateOneRequiredWithoutStaffsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DispatchedVehicleCreateOrConnectWithoutStaffsInputSchema).optional(),
  upsert: z.lazy(() => DispatchedVehicleUpsertWithoutStaffsInputSchema).optional(),
  connect: z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DispatchedVehicleUpdateToOneWithWhereWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUpdateWithoutStaffsInputSchema), z.lazy(() => DispatchedVehicleUncheckedUpdateWithoutStaffsInputSchema) ]).optional(),
});

export default DispatchedVehicleUpdateOneRequiredWithoutStaffsNestedInputSchema;
