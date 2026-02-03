import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeCreateNestedManyWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateNestedManyWithoutSpecialLeaveGroupInputSchema';

export const SpecialLeaveGroupCreateInputSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  SpecialLeaveType: z.lazy(() => SpecialLeaveTypeCreateNestedManyWithoutSpecialLeaveGroupInputSchema).optional(),
});

export default SpecialLeaveGroupCreateInputSchema;
