import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateManyIncidentInputSchema } from './IncidentVehicleCreateManyIncidentInputSchema';

export const IncidentVehicleCreateManyIncidentInputEnvelopeSchema: z.ZodType<Prisma.IncidentVehicleCreateManyIncidentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentVehicleCreateManyIncidentInputSchema), z.lazy(() => IncidentVehicleCreateManyIncidentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentVehicleCreateManyIncidentInputEnvelopeSchema;
