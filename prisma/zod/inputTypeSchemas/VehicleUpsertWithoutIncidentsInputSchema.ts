import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleUpdateWithoutIncidentsInputSchema } from './VehicleUpdateWithoutIncidentsInputSchema';
import { VehicleUncheckedUpdateWithoutIncidentsInputSchema } from './VehicleUncheckedUpdateWithoutIncidentsInputSchema';
import { VehicleCreateWithoutIncidentsInputSchema } from './VehicleCreateWithoutIncidentsInputSchema';
import { VehicleUncheckedCreateWithoutIncidentsInputSchema } from './VehicleUncheckedCreateWithoutIncidentsInputSchema';
import { VehicleWhereInputSchema } from './VehicleWhereInputSchema';

export const VehicleUpsertWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleUpsertWithoutIncidentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => VehicleUpdateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedUpdateWithoutIncidentsInputSchema) ]),
  create: z.union([ z.lazy(() => VehicleCreateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutIncidentsInputSchema) ]),
  where: z.lazy(() => VehicleWhereInputSchema).optional(),
});

export default VehicleUpsertWithoutIncidentsInputSchema;
