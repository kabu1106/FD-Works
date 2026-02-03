import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeCreateManySpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateManySpecialLeaveGroupInputSchema';

export const SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SpecialLeaveTypeCreateManySpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeCreateManySpecialLeaveGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema;
