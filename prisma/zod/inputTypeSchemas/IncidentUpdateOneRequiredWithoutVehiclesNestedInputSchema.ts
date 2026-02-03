import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutVehiclesInputSchema } from './IncidentCreateWithoutVehiclesInputSchema';
import { IncidentUncheckedCreateWithoutVehiclesInputSchema } from './IncidentUncheckedCreateWithoutVehiclesInputSchema';
import { IncidentCreateOrConnectWithoutVehiclesInputSchema } from './IncidentCreateOrConnectWithoutVehiclesInputSchema';
import { IncidentUpsertWithoutVehiclesInputSchema } from './IncidentUpsertWithoutVehiclesInputSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateToOneWithWhereWithoutVehiclesInputSchema } from './IncidentUpdateToOneWithWhereWithoutVehiclesInputSchema';
import { IncidentUpdateWithoutVehiclesInputSchema } from './IncidentUpdateWithoutVehiclesInputSchema';
import { IncidentUncheckedUpdateWithoutVehiclesInputSchema } from './IncidentUncheckedUpdateWithoutVehiclesInputSchema';

export const IncidentUpdateOneRequiredWithoutVehiclesNestedInputSchema: z.ZodType<Prisma.IncidentUpdateOneRequiredWithoutVehiclesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutVehiclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCreateOrConnectWithoutVehiclesInputSchema).optional(),
  upsert: z.lazy(() => IncidentUpsertWithoutVehiclesInputSchema).optional(),
  connect: z.lazy(() => IncidentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateToOneWithWhereWithoutVehiclesInputSchema), z.lazy(() => IncidentUpdateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutVehiclesInputSchema) ]).optional(),
});

export default IncidentUpdateOneRequiredWithoutVehiclesNestedInputSchema;
