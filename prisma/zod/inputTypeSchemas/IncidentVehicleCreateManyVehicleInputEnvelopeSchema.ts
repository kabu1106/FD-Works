import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateManyVehicleInputSchema } from './IncidentVehicleCreateManyVehicleInputSchema';

export const IncidentVehicleCreateManyVehicleInputEnvelopeSchema: z.ZodType<Prisma.IncidentVehicleCreateManyVehicleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentVehicleCreateManyVehicleInputSchema), z.lazy(() => IncidentVehicleCreateManyVehicleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentVehicleCreateManyVehicleInputEnvelopeSchema;
