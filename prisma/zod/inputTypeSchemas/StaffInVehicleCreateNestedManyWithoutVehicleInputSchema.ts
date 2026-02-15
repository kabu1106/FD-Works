import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleCreateWithoutVehicleInputSchema } from './StaffInVehicleCreateWithoutVehicleInputSchema';
import { StaffInVehicleUncheckedCreateWithoutVehicleInputSchema } from './StaffInVehicleUncheckedCreateWithoutVehicleInputSchema';
import { StaffInVehicleCreateOrConnectWithoutVehicleInputSchema } from './StaffInVehicleCreateOrConnectWithoutVehicleInputSchema';
import { StaffInVehicleCreateManyVehicleInputEnvelopeSchema } from './StaffInVehicleCreateManyVehicleInputEnvelopeSchema';
import { StaffInVehicleWhereUniqueInputSchema } from './StaffInVehicleWhereUniqueInputSchema';

export const StaffInVehicleCreateNestedManyWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleCreateNestedManyWithoutVehicleInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffInVehicleCreateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleCreateWithoutVehicleInputSchema).array(), z.lazy(() => StaffInVehicleUncheckedCreateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUncheckedCreateWithoutVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StaffInVehicleCreateOrConnectWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleCreateOrConnectWithoutVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StaffInVehicleCreateManyVehicleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StaffInVehicleWhereUniqueInputSchema), z.lazy(() => StaffInVehicleWhereUniqueInputSchema).array() ]).optional(),
});

export default StaffInVehicleCreateNestedManyWithoutVehicleInputSchema;
