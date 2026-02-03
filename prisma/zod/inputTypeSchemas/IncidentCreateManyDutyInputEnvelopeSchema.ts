import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateManyDutyInputSchema } from './IncidentCreateManyDutyInputSchema';

export const IncidentCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.IncidentCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentCreateManyDutyInputSchema), z.lazy(() => IncidentCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentCreateManyDutyInputEnvelopeSchema;
