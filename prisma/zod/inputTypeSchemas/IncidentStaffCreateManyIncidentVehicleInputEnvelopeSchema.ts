import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateManyIncidentVehicleInputSchema } from './IncidentStaffCreateManyIncidentVehicleInputSchema';

export const IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema: z.ZodType<Prisma.IncidentStaffCreateManyIncidentVehicleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentStaffCreateManyIncidentVehicleInputSchema), z.lazy(() => IncidentStaffCreateManyIncidentVehicleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema;
