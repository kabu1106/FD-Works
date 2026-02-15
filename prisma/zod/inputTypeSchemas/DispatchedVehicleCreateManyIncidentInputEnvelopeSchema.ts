import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateManyIncidentInputSchema } from './DispatchedVehicleCreateManyIncidentInputSchema';

export const DispatchedVehicleCreateManyIncidentInputEnvelopeSchema: z.ZodType<Prisma.DispatchedVehicleCreateManyIncidentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DispatchedVehicleCreateManyIncidentInputSchema), z.lazy(() => DispatchedVehicleCreateManyIncidentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DispatchedVehicleCreateManyIncidentInputEnvelopeSchema;
