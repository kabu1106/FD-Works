import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateWithoutIncidentsInputSchema } from './LocationCreateWithoutIncidentsInputSchema';
import { LocationUncheckedCreateWithoutIncidentsInputSchema } from './LocationUncheckedCreateWithoutIncidentsInputSchema';
import { LocationCreateOrConnectWithoutIncidentsInputSchema } from './LocationCreateOrConnectWithoutIncidentsInputSchema';
import { LocationUpsertWithoutIncidentsInputSchema } from './LocationUpsertWithoutIncidentsInputSchema';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationUpdateToOneWithWhereWithoutIncidentsInputSchema } from './LocationUpdateToOneWithWhereWithoutIncidentsInputSchema';
import { LocationUpdateWithoutIncidentsInputSchema } from './LocationUpdateWithoutIncidentsInputSchema';
import { LocationUncheckedUpdateWithoutIncidentsInputSchema } from './LocationUncheckedUpdateWithoutIncidentsInputSchema';

export const LocationUpdateOneRequiredWithoutIncidentsNestedInputSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutIncidentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LocationCreateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedCreateWithoutIncidentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutIncidentsInputSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutIncidentsInputSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LocationUpdateToOneWithWhereWithoutIncidentsInputSchema), z.lazy(() => LocationUpdateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutIncidentsInputSchema) ]).optional(),
});

export default LocationUpdateOneRequiredWithoutIncidentsNestedInputSchema;
