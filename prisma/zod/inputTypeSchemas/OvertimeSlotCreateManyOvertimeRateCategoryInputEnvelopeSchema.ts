import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateManyOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateManyOvertimeRateCategoryInputSchema';

export const OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema: z.ZodType<Prisma.OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OvertimeSlotCreateManyOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotCreateManyOvertimeRateCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema;
