import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputSchema';

export const SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema;
