import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveTypeUncheckedCreateInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  specialLeaveGroupId: z.string(),
  isActive: z.boolean(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema).optional(),
});

export default SpecialLeaveTypeUncheckedCreateInputSchema;
