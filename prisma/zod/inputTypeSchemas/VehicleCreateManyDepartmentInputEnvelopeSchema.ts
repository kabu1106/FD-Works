import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleCreateManyDepartmentInputSchema } from './VehicleCreateManyDepartmentInputSchema';

export const VehicleCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.VehicleCreateManyDepartmentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VehicleCreateManyDepartmentInputSchema), z.lazy(() => VehicleCreateManyDepartmentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default VehicleCreateManyDepartmentInputEnvelopeSchema;
