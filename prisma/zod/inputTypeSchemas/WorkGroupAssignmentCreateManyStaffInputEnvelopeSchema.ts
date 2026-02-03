import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateManyStaffInputSchema } from './WorkGroupAssignmentCreateManyStaffInputSchema';

export const WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => WorkGroupAssignmentCreateManyStaffInputSchema), z.lazy(() => WorkGroupAssignmentCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema;
