import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleCreateManyVehicleInputSchema } from './StaffInVehicleCreateManyVehicleInputSchema';

export const StaffInVehicleCreateManyVehicleInputEnvelopeSchema: z.ZodType<Prisma.StaffInVehicleCreateManyVehicleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => StaffInVehicleCreateManyVehicleInputSchema), z.lazy(() => StaffInVehicleCreateManyVehicleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default StaffInVehicleCreateManyVehicleInputEnvelopeSchema;
