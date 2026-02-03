import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereInputSchema } from './VehicleWhereInputSchema';
import { VehicleUpdateWithoutIncidentsInputSchema } from './VehicleUpdateWithoutIncidentsInputSchema';
import { VehicleUncheckedUpdateWithoutIncidentsInputSchema } from './VehicleUncheckedUpdateWithoutIncidentsInputSchema';

export const VehicleUpdateToOneWithWhereWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleUpdateToOneWithWhereWithoutIncidentsInput> = z.strictObject({
  where: z.lazy(() => VehicleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VehicleUpdateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedUpdateWithoutIncidentsInputSchema) ]),
});

export default VehicleUpdateToOneWithWhereWithoutIncidentsInputSchema;
