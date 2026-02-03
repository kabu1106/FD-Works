import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleCreateWithoutIncidentsInputSchema } from './VehicleCreateWithoutIncidentsInputSchema';
import { VehicleUncheckedCreateWithoutIncidentsInputSchema } from './VehicleUncheckedCreateWithoutIncidentsInputSchema';
import { VehicleCreateOrConnectWithoutIncidentsInputSchema } from './VehicleCreateOrConnectWithoutIncidentsInputSchema';
import { VehicleUpsertWithoutIncidentsInputSchema } from './VehicleUpsertWithoutIncidentsInputSchema';
import { VehicleWhereUniqueInputSchema } from './VehicleWhereUniqueInputSchema';
import { VehicleUpdateToOneWithWhereWithoutIncidentsInputSchema } from './VehicleUpdateToOneWithWhereWithoutIncidentsInputSchema';
import { VehicleUpdateWithoutIncidentsInputSchema } from './VehicleUpdateWithoutIncidentsInputSchema';
import { VehicleUncheckedUpdateWithoutIncidentsInputSchema } from './VehicleUncheckedUpdateWithoutIncidentsInputSchema';

export const VehicleUpdateOneRequiredWithoutIncidentsNestedInputSchema: z.ZodType<Prisma.VehicleUpdateOneRequiredWithoutIncidentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VehicleCreateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedCreateWithoutIncidentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutIncidentsInputSchema).optional(),
  upsert: z.lazy(() => VehicleUpsertWithoutIncidentsInputSchema).optional(),
  connect: z.lazy(() => VehicleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VehicleUpdateToOneWithWhereWithoutIncidentsInputSchema), z.lazy(() => VehicleUpdateWithoutIncidentsInputSchema), z.lazy(() => VehicleUncheckedUpdateWithoutIncidentsInputSchema) ]).optional(),
});

export default VehicleUpdateOneRequiredWithoutIncidentsNestedInputSchema;
