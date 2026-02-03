import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateManyIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateManyIncidentStaffInputSchema';

export const IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentStaffAllowanceCreateManyIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceCreateManyIncidentStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema;
