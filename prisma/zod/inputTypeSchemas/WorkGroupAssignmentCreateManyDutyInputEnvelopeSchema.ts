import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateManyDutyInputSchema } from './WorkGroupAssignmentCreateManyDutyInputSchema';

export const WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => WorkGroupAssignmentCreateManyDutyInputSchema), z.lazy(() => WorkGroupAssignmentCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema;
