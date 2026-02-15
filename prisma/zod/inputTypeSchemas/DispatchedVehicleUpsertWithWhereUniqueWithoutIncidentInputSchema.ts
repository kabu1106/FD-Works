import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';
import { DispatchedVehicleUpdateWithoutIncidentInputSchema } from './DispatchedVehicleUpdateWithoutIncidentInputSchema';
import { DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema';
import { DispatchedVehicleCreateWithoutIncidentInputSchema } from './DispatchedVehicleCreateWithoutIncidentInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema';

export const DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => DispatchedVehicleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DispatchedVehicleUpdateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema) ]),
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default DispatchedVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema;
