import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentSelectSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentSelectSchema';
import { SpecialLeaveAssignmentIncludeSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentIncludeSchema';

export const SpecialLeaveAssignmentArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentDefaultArgs> = z.object({
  select: z.lazy(() => SpecialLeaveAssignmentSelectSchema).optional(),
  include: z.lazy(() => SpecialLeaveAssignmentIncludeSchema).optional(),
}).strict();

export default SpecialLeaveAssignmentArgsSchema;
