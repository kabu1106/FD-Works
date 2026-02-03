import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateNestedManyWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutSpecialLeaveTypeInputSchema).optional(),
});

export default SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema;
