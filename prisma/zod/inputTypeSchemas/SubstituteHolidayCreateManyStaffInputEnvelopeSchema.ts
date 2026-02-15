import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayCreateManyStaffInputSchema } from './SubstituteHolidayCreateManyStaffInputSchema';

export const SubstituteHolidayCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.SubstituteHolidayCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SubstituteHolidayCreateManyStaffInputSchema), z.lazy(() => SubstituteHolidayCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SubstituteHolidayCreateManyStaffInputEnvelopeSchema;
