import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentCreateNestedManyWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveTypeCreateInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  specialLeaveGroup: z.lazy(() => SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutSpecialLeaveTypeInputSchema).optional(),
});

export default SpecialLeaveTypeCreateInputSchema;
