import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema).optional(),
});

export default SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema;
