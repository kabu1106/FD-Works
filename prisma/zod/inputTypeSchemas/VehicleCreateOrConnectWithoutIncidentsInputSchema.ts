import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';
import { VehicleCreateWithoutIncidentsInputSchema } from './VehicleCreateWithoutIncidentsInputSchema';
import { VehicleUncheckedCreateWithoutIncidentsInputSchema } from './VehicleUncheckedCreateWithoutIncidentsInputSchema';

export const VehicleCreateOrConnectWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutIncidentsInput> = z.strictObject({
  where: z.lazy(() => VehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VehicleCreateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutIncidentsInputSchema) ]),
});

export default VehicleCreateOrConnectWithoutIncidentsInputSchema;
