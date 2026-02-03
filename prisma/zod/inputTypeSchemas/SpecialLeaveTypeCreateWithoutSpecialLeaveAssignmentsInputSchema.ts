import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  specialLeaveGroup: z.lazy(() => SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema),
});

export default SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema;
