import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeUncheckedCreateNestedManyWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedCreateNestedManyWithoutSpecialLeaveGroupInputSchema';

export const SpecialLeaveGroupUncheckedCreateInputSchema: z.ZodType<Prisma.SpecialLeaveGroupUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  SpecialLeaveType: z.lazy(() => SpecialLeaveTypeUncheckedCreateNestedManyWithoutSpecialLeaveGroupInputSchema).optional(),
});

export default SpecialLeaveGroupUncheckedCreateInputSchema;
