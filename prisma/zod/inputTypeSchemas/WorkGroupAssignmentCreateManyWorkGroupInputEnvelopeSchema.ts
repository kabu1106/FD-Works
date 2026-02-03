import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateManyWorkGroupInputSchema } from './WorkGroupAssignmentCreateManyWorkGroupInputSchema';

export const WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyWorkGroupInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => WorkGroupAssignmentCreateManyWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentCreateManyWorkGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema;
