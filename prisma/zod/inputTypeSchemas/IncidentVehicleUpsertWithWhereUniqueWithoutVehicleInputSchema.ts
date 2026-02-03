import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateWithoutVehicleInputSchema } from './IncidentVehicleUpdateWithoutVehicleInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema } from './IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema';
import { IncidentVehicleCreateWithoutVehicleInputSchema } from './IncidentVehicleCreateWithoutVehicleInputSchema';
import { IncidentVehicleUncheckedCreateWithoutVehicleInputSchema } from './IncidentVehicleUncheckedCreateWithoutVehicleInputSchema';

export const IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentVehicleUpdateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutVehicleInputSchema) ]),
});

export default IncidentVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema;
