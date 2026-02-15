import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelCreateWithoutVehiclesInputSchema } from './IncidentReadModelCreateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema';
import { IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema } from './IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema';
import { IncidentReadModelUpsertWithoutVehiclesInputSchema } from './IncidentReadModelUpsertWithoutVehiclesInputSchema';
import { IncidentReadModelWhereUniqueInputSchema } from './IncidentReadModelWhereUniqueInputSchema';
import { IncidentReadModelUpdateToOneWithWhereWithoutVehiclesInputSchema } from './IncidentReadModelUpdateToOneWithWhereWithoutVehiclesInputSchema';
import { IncidentReadModelUpdateWithoutVehiclesInputSchema } from './IncidentReadModelUpdateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema';

export const IncidentReadModelUpdateOneRequiredWithoutVehiclesNestedInputSchema: z.ZodType<Prisma.IncidentReadModelUpdateOneRequiredWithoutVehiclesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentReadModelCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema).optional(),
  upsert: z.lazy(() => IncidentReadModelUpsertWithoutVehiclesInputSchema).optional(),
  connect: z.lazy(() => IncidentReadModelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentReadModelUpdateToOneWithWhereWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUpdateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema) ]).optional(),
});

export default IncidentReadModelUpdateOneRequiredWithoutVehiclesNestedInputSchema;
