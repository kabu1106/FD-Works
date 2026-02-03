import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateManyStaffInputSchema } from './SpecialLeaveAssignmentCreateManyStaffInputSchema';

export const SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateManyStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema;
