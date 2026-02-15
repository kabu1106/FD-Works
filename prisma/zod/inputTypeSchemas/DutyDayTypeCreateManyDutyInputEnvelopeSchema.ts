import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeCreateManyDutyInputSchema } from './DutyDayTypeCreateManyDutyInputSchema';

export const DutyDayTypeCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.DutyDayTypeCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DutyDayTypeCreateManyDutyInputSchema), z.lazy(() => DutyDayTypeCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DutyDayTypeCreateManyDutyInputEnvelopeSchema;
