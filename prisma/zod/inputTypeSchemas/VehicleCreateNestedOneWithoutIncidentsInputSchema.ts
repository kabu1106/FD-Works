import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleCreateWithoutIncidentsInputSchema } from './VehicleCreateWithoutIncidentsInputSchema';
import { VehicleUncheckedCreateWithoutIncidentsInputSchema } from './VehicleUncheckedCreateWithoutIncidentsInputSchema';
import { VehicleCreateOrConnectWithoutIncidentsInputSchema } from './VehicleCreateOrConnectWithoutIncidentsInputSchema';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';

export const VehicleCreateNestedOneWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutIncidentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => VehicleCreateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutIncidentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutIncidentsInputSchema).optional(),
  connect: z.lazy(() => VehicleWhereUniqueInputSchema).optional(),
});

export default VehicleCreateNestedOneWithoutIncidentsInputSchema;
