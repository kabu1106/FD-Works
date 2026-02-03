import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateWithoutIncidentInputSchema } from './IncidentVehicleUpdateWithoutIncidentInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutIncidentInputSchema } from './IncidentVehicleUncheckedUpdateWithoutIncidentInputSchema';
import { IncidentVehicleCreateWithoutIncidentInputSchema } from './IncidentVehicleCreateWithoutIncidentInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentInputSchema';

export const IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentVehicleUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutIncidentInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default IncidentVehicleUpsertWithWhereUniqueWithoutIncidentInputSchema;
