import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateManyDutyInputSchema } from './SpecialLeaveAssignmentCreateManyDutyInputSchema';

export const SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateManyDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema;
