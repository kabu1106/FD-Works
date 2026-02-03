import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateManyAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateManyAllowanceTypeInputSchema';

export const IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentStaffAllowanceCreateManyAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceCreateManyAllowanceTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema;
