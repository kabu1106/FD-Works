import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeCreateManyStaffInputSchema } from './DutyDayTypeCreateManyStaffInputSchema';

export const DutyDayTypeCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.DutyDayTypeCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DutyDayTypeCreateManyStaffInputSchema), z.lazy(() => DutyDayTypeCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DutyDayTypeCreateManyStaffInputEnvelopeSchema;
