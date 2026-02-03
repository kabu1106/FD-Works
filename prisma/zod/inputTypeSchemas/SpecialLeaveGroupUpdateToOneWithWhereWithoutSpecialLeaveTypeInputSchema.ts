import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupWhereInputSchema } from './SpecialLeaveGroupWhereInputSchema';
import { SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveGroupUpdateToOneWithWhereWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveGroupUpdateToOneWithWhereWithoutSpecialLeaveTypeInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveGroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema) ]),
});

export default SpecialLeaveGroupUpdateToOneWithWhereWithoutSpecialLeaveTypeInputSchema;
