import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeScalarWhereInputSchema } from './SpecialLeaveTypeScalarWhereInputSchema';
import { SpecialLeaveTypeUpdateManyMutationInputSchema } from './SpecialLeaveTypeUpdateManyMutationInputSchema';
import { SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupInputSchema';

export const SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveTypeUpdateManyMutationInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupInputSchema) ]),
});

export default SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInputSchema;
